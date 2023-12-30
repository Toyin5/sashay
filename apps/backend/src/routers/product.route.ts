import { Router } from "express";
import { uploadPhoto } from "../helpers/image.upload";
import { allProducts, singleProduct, uploadProduct } from "../controllers/product.controller";
import { validateProduct } from "../middlewares/validator";
import { productInputSchema } from "../schemas/product.schema";

const productRouter = Router();

productRouter.route("/products/:id").post(validateProduct(productInputSchema), uploadPhoto, uploadProduct);
productRouter.route("/products/:id").get(singleProduct);
productRouter.route("/products").get(allProducts);

export default productRouter;