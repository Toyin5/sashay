import { ZodError, ZodType, z } from "zod";
import { userInputSchemaInterface } from "../interfaces/user.interface";
import { RequestHandler } from "express";

const schemaObj = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({}),
});

export const validateUserInput = (schema: ZodType<userInputSchemaInterface>): RequestHandler => async (req, res, next) => {
  try {
    schemaObj.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    await schema.parseAsync(req.body);
    next();
  } catch (error: any) {
    if (error instanceof ZodError) {
      const theExpectedZodErrorMessage = error.errors.map((error) => error.message);

      return res.status(400).json({
        message: theExpectedZodErrorMessage[0]
      })
    }
    return res.status(500).json({
      message: error.message,
      status: "zod Failed",
    })
  }
}