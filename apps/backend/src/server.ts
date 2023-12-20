import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";
import logger from "./utils/logger";
import app from "./app";
dotenv.config();


const port = process.env.PORT;
const databaseConnectionsString = <string>process.env.DATABASE_URL;

mongoose.connect(databaseConnectionsString).then(() => {
  logger.info("Connected to database")
}).then(() => {
  app.listen(port, () => {
    logger.info(`Server listening on ${port}`);
  })
}).catch((error) => {
  logger.error(error.message);
})



