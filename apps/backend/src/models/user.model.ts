import mongoose, { Document } from "mongoose";
import { userInterface } from "../interfaces/user.interface";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"]
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"]
  },
  image: {
    type: String,
  },
  imageCloudId: {
    type: String
  },
  token: {
    type: String
  },
  verified: {
    type: Boolean,
    default: false
  },
  verificationNumber: {
    type: Number
  }
}, {
  timestamps: true,
  versionKey: false
});

const User = mongoose.model<userInterface>("user", userSchema);

export default User;