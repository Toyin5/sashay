import express, { Request, Response } from "express";
import cors from "cors";
import userRouter from "./routers/user.route";
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload({
  useTempFiles: true
}));

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    message: `This Route ${req.originalUrl} does not exist on this Server`
  })
})

app.use("/api/v1", userRouter);

export default app;