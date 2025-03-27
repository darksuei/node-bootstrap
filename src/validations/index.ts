import { ApiError } from "../middlewares/error";
import * as z from "zod";
import httpStatus from "http-status";
import logger from "../config/logger.config";

export function validateRequest<T>(schema: z.ZodType<T>, payload: any) {
  try {
    schema.parse(payload);
    return payload as z.infer<typeof schema>;
  } catch (e: any) {
    logger.error("Validation error: %o", e);
    throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, e.message ?? "Validation error");
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
