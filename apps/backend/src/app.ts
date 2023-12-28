import express, { Request, Response } from "express";
import cors from "cors";
import userRouter from "./routers/user.route";
import fileUpload from "express-fileupload";
import adminRouter from "./routers/admin.route";
import productRouter from "./routers/product.route";

const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload({
  useTempFiles: true
}));


app.use("/api/v1", userRouter);

app.use("/api/v1", adminRouter);

app.use("/api/v1", productRouter);


app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    message: `This Route ${req.originalUrl} does not exist on this Server`
  })
})

export default app;