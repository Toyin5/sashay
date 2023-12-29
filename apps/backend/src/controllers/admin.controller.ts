import ServerError from "../errors/server.error";
import { generateAdminToken } from "../helpers/json.web.token";
import Admin from "../models/admin.model";
import bcrypt from "bcrypt";
import { RequestHandler } from "express";
import mailGenerator from "../utils/mail.generator";
import mailSender from "../middlewares/mailService";
import verificationCode from "../helpers/generate.code";
import { AdminInputInterface } from "../interfaces/admin.interface";
import { Content } from "mailgen";


export const registerAdmin: RequestHandler = async (req, res) => {
  try {
    const { email, password, phoneNumber, firstName, lastName, image, imageCloudId } = req.body;
    const Email = await Admin.findOne({ email });
    if (Email) {
      return res.status(400).json({
        message: "Email already taken!"
      })
    };
    const saltPassword = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, saltPassword);

    const adminData: AdminInputInterface = {
      email,
      password: hashPassword,
      phoneNumber,
      firstName,
      lastName,
      image,
      imageCloudId,
      verificationCode
    };

    const admin = new Admin(adminData);

    admin.token = generateAdminToken(firstName, admin.isAdmin);
    await admin.save();

    interface ExtendedContent extends Content {
      body: {
        name: string;
        intro: string;
        code: number;
        outro: string;
      };
    }

    const emailContent: ExtendedContent = {
      body: {
        name: admin.firstName + ' ' + admin.lastName,
        intro: `Welcome to Sashay store! Your verification code is: <br/> <strong>${verificationCode}</strong>`,
        code: verificationCode,
        outro: 'Need help, or have questions? Just reply to this email.',
      },
    };

    const emailBody = mailGenerator.generate(emailContent);
    const emailText = mailGenerator.generatePlaintext(emailContent);

    const mailService = new mailSender();
    mailService.createConnection();
    mailService.mail({
      from: {
        address: <string>process.env.EMAIL
      },
      email: admin.email,
      subject: "Kindly verify!",
      message: emailText,
      html: emailBody
    });


    return res.status(201).json({
      success: true,
      data: admin
    })

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export const verifyAdminAccount: RequestHandler = async (req, res) => {
  try {
    const { verificationCode } = req.body;
    const theVerificationCode = await Admin.findOne({ verificationCode });
    if (!theVerificationCode) {
      return res.status(400).json({
        message: "Invalid verification code!"
      })
    }

    theVerificationCode.verified = true;
    await theVerificationCode.save();

    return res.status(201).json({
      message: "Success!",
    })
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
};


export const singleAdmin: RequestHandler = async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const admin = await Admin.findById(adminId).populate("products");
    if (!admin) {
      return res.status(404).json({
        message: 'Admin not found'
      })
    } else {
      return res.status(200).json({
        status: true,
        data: admin
      })
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}