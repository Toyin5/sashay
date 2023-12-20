import { ZodSchema, object, string, z } from "zod";
import { userInputSchemaInterface } from "../interfaces/user.interface";



export const userInputSchema: ZodSchema<userInputSchemaInterface> = object({
  username: string({
    required_error: "Username is required!",
  }).min(2),
  email: string({
    required_error: "Email is required!"
  }).nonempty().email("Invalid Email Format!"),
  password: string({
    required_error: "Password is required!"
  }).min(6, "Password must be at least 6 characters long"),
  phoneNumber: string({
    required_error: "Phone Number is required"
  }).nonempty().min(8, "Phone number not correct!")
});
