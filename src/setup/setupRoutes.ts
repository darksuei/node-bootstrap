import { Application } from "express";
import health_check_route from "../routes/healthCheckRoute";

export default function setupRoutes(app: Application): void {
  app.use("/api/v1/health", health_check_route);
}
