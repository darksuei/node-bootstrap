import { Application } from "express";
import healthCheckRoute from "../routes/healthCheckRoute";

export default function setupRoutes(app: Application): void {
  app.use("/api/v1/health", healthCheckRoute);
}
