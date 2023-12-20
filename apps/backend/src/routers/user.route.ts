import { Router } from "express";
import { uploadUserPhoto } from "../helpers/image.upload";
import { validateUserInput } from "../middlewares/validator";
import { userInputSchema } from "../schemas/user.schema";
import { signUpUser } from "../controllers/user.controller";

const userRouter = Router();

userRouter.route("/users").post(uploadUserPhoto, validateUserInput(userInputSchema), signUpUser);

export default userRouter;
