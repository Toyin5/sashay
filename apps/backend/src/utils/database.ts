import mongoose from "mongoose";
import "dotenv/config";
import logger from "./logger";

export const connectDb = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URI!);

    logger.info("MongoDB Connected to " + conn.connection.name);
  } catch (error) {
    logger.error("Error: " + (error as Error).message);
    process.exit(1);
  }
};
