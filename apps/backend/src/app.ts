import express, { Request, Response } from "express";
import cors from "cors";
import userRouter from "./routers/user.route";
import fileUpload from "express-fileupload";
import adminRouter from "./routers/admin.route";

const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload({
  useTempFiles: true
}));

<<<<<<< HEAD
app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    message: `This Route ${req.originalUrl} does not exist on this Server`
  })
})
=======
>>>>>>> b41b771 (admin verify)

app.use("/api/v1", userRouter);

app.use("/api/v1", adminRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    message: `This Route ${req.originalUrl} does not exist on this Server`
  })
})

export default app;