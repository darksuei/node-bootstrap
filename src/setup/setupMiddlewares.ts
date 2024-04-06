import { type Application } from "express";
import morgan_config from "../services/morgan.config";

export default function setupMiddlewares(app: Application): void {
  app.use(morgan_config);
}
