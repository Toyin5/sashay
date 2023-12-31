import { productDataInterface } from "../interfaces/product.interface";
import Admin from "../models/admin.model";
import Product from "../models/product.model";
import { RequestHandler } from "express";
import cloudinary from "../utils/cloudinary";


export const uploadProduct: RequestHandler = async (req, res) => {
  try {
    const adminId = req.params.id;

    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    const { productName,
      price,
      productDescription,
      color,
      type,
      quantity, category, image, imageCloudId } = req.body;

    const productData: productDataInterface = {
      productName,
      price: Number(price),
      productDescription,
      color,
      type,
      quantity: Number(quantity),
      category,
      image,
      imageCloudId,
      admin: admin._id
    };
    const createProduct = await Product.create(productData);
    await Admin.updateOne(
      { _id: adminId },
      { $push: { products: createProduct._id } }
    );
    if (!createProduct) {
      return res.status(400).json({
        message: "Error creating product"
      })
    } else {
      return res.status(201).json({
        success: true,
        data: createProduct
      })
    };
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
      status: "Failed"
    })
  }
};


export const singleProduct: RequestHandler = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      })
    } else {
      return res.status(200).json({
        success: true,
        data: product
      })
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
      status: "Failed"
    })
  }
}


export const allProducts: RequestHandler = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res.status(404).json({
        message: "Product not found"
      })
    } else {
      return res.status(200).json({
        success: true,
        length: products.length,
        data: products
      })
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
      status: "Failed"
    })
  }
};

export const deleteProduct: RequestHandler = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "The Product trying you are to delete is not found"
      })
    }
    await cloudinary.uploader.destroy(product.imageCloudId);
    await Product.findByIdAndDelete(productId);

    return res.status(202).json({
      message: "Product deleted successfully!"
    })
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
      status: "Failed"
    })
  }
}