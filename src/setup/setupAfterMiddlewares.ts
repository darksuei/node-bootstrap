import { type Application } from "express";
import { errorConverter, errorHandler } from "../middlewares/error";

export default function setupAfterMiddlewares(app: Application): void {
  // convert error to ApiError, if needed
  app.use(errorConverter);

  // handle error
  app.use(errorHandler);
}
