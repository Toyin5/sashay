import { Router } from "express";
import { registerAdmin, singleAdmin, verifyAdminAccount } from "../controllers/admin.controller";
import { validateAdmin } from "../middlewares/validator";
import { adminInputSchema } from "../schemas/admin.schema";
import { uploadPhoto } from "../helpers/image.upload";

const adminRouter = Router();

adminRouter.route("/admin").post(validateAdmin(adminInputSchema), uploadPhoto, registerAdmin);
adminRouter.route("/admin/verify").put(verifyAdminAccount);
adminRouter.route("/admin/:adminId").get(singleAdmin);

export default adminRouter;