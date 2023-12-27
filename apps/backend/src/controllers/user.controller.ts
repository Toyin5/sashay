import { RequestHandler } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { UserData } from "../interfaces/user.interface";
import { generateUserToken } from "../helpers/json.web.token";
import { Content } from "mailgen";
import mailGenerator from "../utils/mail.generator";
import mailSender from "../middlewares/mailService";
import verificationCode from "../helpers/generate.code";


export const signUpUser: RequestHandler = async (req, res) => {
  try {
    const { email, username, password, phoneNumber, image, imageCloudId } =
      req.body;
    const Email = await User.findOne({ email });
    if (Email) {
      return res.status(400).json({
        message: "Email already taken.",
      });
    }
    const hashPassword = await bcrypt.hash(password, 7);

    const userData: UserData = {
      username,
      email,
      password: hashPassword,
      phoneNumber,
      verificationNumber: verificationCode,
      image,
      imageCloudId,
    };

    const userInstance = new User(userData);

    userInstance.token = generateUserToken(phoneNumber, username);
    await userInstance.save();

    //send an email to the user who signed up!

    const emailContent = {
      body: {
        name: userInstance.username,
        intro: 'Welcome to Your Sashay store! Your verification code is:',
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
      email: userInstance.email,
      subject: "Kindly verify!",
      message: emailText,
      html: emailBody
    });

    return res.status(201).json({
      success: true,
      data: userInstance,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyUsersAccount: RequestHandler = async (req, res) => {
  try {
    const { verificationCode } = req.body;
    const theVerificationCode = await User.findOne({ verificationNumber: verificationCode });
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
}
