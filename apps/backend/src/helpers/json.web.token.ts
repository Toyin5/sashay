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
