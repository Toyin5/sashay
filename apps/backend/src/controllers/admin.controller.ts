import ServerError from "../errors/server.error";
import Admin from "../models/admin.model";
import { RequestHandler } from "express";


export const registerAdmin: RequestHandler = async (request, response) => {
  try {

  } catch (error: any) {
    return response.status(500).json({
      success: false,
      message: error.message,
    })
  }
}