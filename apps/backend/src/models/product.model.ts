import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: {
    type: String,
    require: [true, "product name is required"],
  },
  price: {
    type: Number,
    require: [true, "product price is required"],
  },
  productDescription: {
    type: String,
    require: [true, "product description is required"]
  },
  color: {
    type: String,
    require: [true, "product color is required"]
  },
  type: {
    type: String,
    require: [true, "product type is required"]
  },
  quantity: {
    type: Number,
    require: [true, "product quantity is required"]
  },
  category: {
    type: String,
    require: [true, "product category is required"]
  },
  image: {
    type: String,
    require: [true, "product image is required"]
  },
  imageCloudId: {
    type: String,
  },
  admin: {
    type: mongoose.Types.ObjectId,
    ref: "admin"
  }
});

const Product = model("product", productSchema);

export default Product;