import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export const generateUserToken = (phoneNumber: string, username: string): string => {
  const userToken = jwt.sign({
    phoneNumber,
    username
  }, <string>process.env.SECRET_KEY, {
    expiresIn: <string>process.env.EXPIRE_TIME
  })

  return userToken;
};


export const generateAdminToken = (firstName: string, isAdmin: boolean): string => {
  const adminToken = jwt.sign({
    user_id: firstName,
    isAdmin: isAdmin,
  }, <string>process.env.SECRET_KEY_AD, {
    expiresIn: <string>process.env.EXPIRE_TIME_AD
  })

  return adminToken;
} 