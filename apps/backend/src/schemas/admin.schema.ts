import { ZodSchema, object, string } from "zod";
import { AdminInputSchema } from "../interfaces/admin.interface";

export const adminInputSchema: ZodSchema<AdminInputSchema> = object({
  firstName: string({
    required_error: "First name is required"
  }).nonempty().min(2).regex(/^[a-zA-Z ]*$/, "Please input only your name characters"),
  lastName: string({
    required_error: "Last name is required"
  }).nonempty().min(2).regex(/^[a-zA-Z ]*$/, "Please input only your name characters"),
  email: string({
    required_error: "Email is required"
  }).nonempty().email("Invalid Email format!"),
  phoneNumber: string({
    required_error: "Phone Number is required"
  }).nonempty().min(8, "Phone number not correct!"),
  password: string({
    required_error: "Password is required"
  }).nonempty().min(7, "Password must be at least 7 characters long")
});
