import { productDataInterface } from "../interfaces/product.interface";
import Admin from "../models/admin.model";
import Product from "../models/product.model";
import { RequestHandler } from "express";


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

