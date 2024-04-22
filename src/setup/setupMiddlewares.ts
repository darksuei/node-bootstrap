import { type Application } from "express";
import morganConfig from "../config/morgan.config";

export default function setupMiddlewares(app: Application): void {
  app.use(morganConfig);
}
