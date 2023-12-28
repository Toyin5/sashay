import { ZodObject, ZodSchema, object, string, z } from "zod";
import { productInputInterface } from "../interfaces/product.interface";



export const productInputSchema: ZodSchema<productInputInterface> = object({
  productName: string({
    required_error: "Username is required!",
  }).nonempty().min(2, "Please enter a valid Name!"),
  productDescription: string({
    required_error: "Please describe the kind of product you are uploading!"
  }).nonempty().min(8, "Please be more specific on your description"),
  category: string({
    required_error: "Please describe the categories of the product you are uploading!"
  }).nonempty().min(3, "Please specify the proper categories of the product"),
  price: z.string({
    required_error: "Please enter the price for the book"
  }).min(1, "Enter a valid number").regex(/^[0-9]*$/, "PLease specify a valid price for the book."),
  quantity: z.string({
    required_error: "Please enter the price for the book"
  }).min(1, "Enter a valid number").regex(/^[0-9]*$/, "Please specify a valid stock number."),
  color: z.string({
    required_error: "Please describe the color of the product you are uploading!"
  }).nonempty().min(3, "Please specify the proper color of the product"),
  type: string({
    required_error: "Please describe the type of the product you are uploading!"
  }).nonempty().min(3, "Please specify the proper type of product"),
});