import express from "express";
import dotenv from "dotenv";
import logger from "./utils/logger";
dotenv.config();


const port = process.env.PORT;

const app = express();

app.use(express.json());

app.listen(port, () => {
  logger.info(`Server listening on ${port}`);
})