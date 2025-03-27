import { type Application } from "express";
import morganConfig from "../config/morgan.config";

export default function setupBeforeMiddlewares(app: Application): void {
  app.use(morganConfig);
}
