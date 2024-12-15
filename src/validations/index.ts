import { ApiError } from "../middlewares/error";
import * as z from "zod";
import httpStatus from "http-status";

export function validateRequest<T>(schema: z.ZodTypeAny, payload: T, validationFunction?: Function) {
  try {
    schema.parse(payload);
    validationFunction && validationFunction();
  } catch (e: any) {
    throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, "Validation error");
  }
}

export async function validateRequestAsync<T>(
  schema: z.ZodTypeAny,
  payload: T,
  validationFunction?: Function
) {
  try {
    schema.parse(payload);
    validationFunction && (await validationFunction());
  } catch (e: any) {
    throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, "Validation error");
  }
}
