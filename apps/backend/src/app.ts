import express from "express";
import cors from "cors";
import userRouter from "./routers/user.route";
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload({
  useTempFiles: true
}))

app.use("/api/v1", userRouter);

export default app;