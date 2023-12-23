import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";
import logger from "./utils/logger";
import app from "./app";
import { connectDb } from "./utils/database";
dotenv.config();

const port = process.env.PORT;

app.listen(port, async () => {
  await connectDb();
  logger.info(`Server listening on ${port}`);
});
