import { Document } from "mongoose";

export interface userInterface extends Document {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  token: string;
  image: string;
  verified: boolean;
  verificationNumber: number;
  imageCloudId: string;
};

export interface UserData {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  verificationNumber: number;
  image: string;
  imageCloudId: string;
}

export interface userInputSchemaInterface {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
}