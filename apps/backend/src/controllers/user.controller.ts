import { RequestHandler } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { UserData } from "../interfaces/user.interface";
import { generateUserToken } from "../helpers/json.web.token";
import { generateToken } from "../helpers/generateToken";
import { sendVerificationEmail } from "../helpers/mailServices";

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

    const verificationCode = parseInt(generateToken());

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

    await sendVerificationEmail({
      email: userInstance.email,
      username: userInstance.username,
      code: verificationCode,
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
