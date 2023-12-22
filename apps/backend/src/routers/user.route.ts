import { Router } from "express";
import { uploadPhoto } from "../helpers/image.upload";
import { validateUserInput } from "../middlewares/validator";
import { userInputSchema } from "../schemas/user.schema";
import { signUpUser, verifyUsersAccount } from "../controllers/user.controller";

const userRouter = Router();

userRouter.route("/users").post(validateUserInput(userInputSchema), uploadPhoto, signUpUser);
userRouter.route("/users/verify").put(verifyUsersAccount);

export default userRouter;
