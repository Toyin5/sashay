import mongoose, { model } from "mongoose";
import { AdminInterface } from "../interfaces/admin.interface";

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Email is required"],
    unique: true
  },
  password: {
    type: String,
    require: [true, "Password is required"],
  },
  phoneNumber: {
    type: String,
    require: [true, "Phone number is required"],
  },
  firstName: {
    type: String,
    require: [true, "First name is required"],
  },
  lastName: {
    type: String,
    require: [true, "Last name is required"]
  },
  token: {
    type: String,
  },
  image: {
    type: String,
    require: [true, "Image is required"]
  },
  imageCloudId: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  verificationCode: {
    type: Number
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "product"
  }]
}, {
  timestamps: true,
  versionKey: false
});

const Admin = model<AdminInterface>("admin", adminSchema);

export default Admin;