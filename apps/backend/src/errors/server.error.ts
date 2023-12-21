import { RequestHandler } from "express";

const ServerError: RequestHandler = (req, res) => {
  return res.status(500).json({
    success: false,
    message: Error,
  })
};

export default ServerError;