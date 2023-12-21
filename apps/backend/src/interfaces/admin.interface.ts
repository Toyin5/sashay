import { Document } from "mongoose";

export interface AdminInterface extends Document {
  email: string;
  password: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  token: string;
  image: string;
  imageCloudId: string;
  verified: boolean;
  isAdmin: boolean;
  verificationCode: number;
}