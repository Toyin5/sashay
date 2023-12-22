import { RequestHandler } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { UserData } from "../interfaces/user.interface";
import { generateUserToken } from "../helpers/json.web.token";
<<<<<<< HEAD
import { generateToken } from "../helpers/generateToken";
import { sendVerificationEmail } from "../helpers/mailServices";
=======
import { Content } from "mailgen";
import mailGenerator from "../utils/mail.generator";
import mailSender from "../middlewares/mailService";
import verificationCode from "../helpers/generate.code";

>>>>>>> b41b771 (admin verify)

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

<<<<<<< HEAD
    const verificationCode = parseInt(generateToken());

=======
>>>>>>> b41b771 (admin verify)
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

<<<<<<< HEAD
    await sendVerificationEmail({
      email: userInstance.email,
      username: userInstance.username,
      code: verificationCode,
=======
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
>>>>>>> b41b771 (admin verify)
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
<<<<<<< HEAD
=======

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
>>>>>>> b41b771 (admin verify)
