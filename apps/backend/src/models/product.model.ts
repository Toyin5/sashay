import mongoose, { Schema, model } from "mongoose";
import { productInterface } from "../interfaces/product.interface";

const productSchema = new Schema({
  productName: {
    type: String,
    required: [true, "product name is required"],
  },
  price: {
    type: Number,
    required: [true, "product price is required"],
  },
  productDescription: {
    type: String,
    required: [true, "product description is required"]
  },
  color: {
    type: String,
    required: [true, "product color is required"]
  },
  type: {
    type: String,
    required: [true, "product type is required"]
  },
  quantity: {
    type: Number,
    required: [true, "product quantity is required"]
  },
  category: {
    type: String,
    required: [true, "product category is required"]
  },
  image: {
    type: String,
    required: [true, "product image is required"]
  },
  imageCloudId: {
    type: String,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin"
  }
}, {
  timestamps: true,
  versionKey: false
});

const Product = model<productInterface>("product", productSchema);

export default Product;