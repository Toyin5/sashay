import { RequestHandler, Request, Response, NextFunction } from "express";
import cloudinary from "../utils/cloudinary";
import { UploadedFile } from "express-fileupload";


export const uploadUserPhoto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.files?.image as UploadedFile[];

    if (!file) {
      return res.status(404).json({
        message: "No file Uploaded!"
      })
    }
    const uploads = Array.isArray(file) ? file : [file];
    for (const file of uploads) {
      const result = await cloudinary.uploader.upload(file.tempFilePath);

      req.body.image = result.secure_url;
      req.body.imageCloudId = result.public_id;
    }
    next();
  } catch (error: any) {
    return res.status(500).json({
      message: error.message
    })
  }
};