import { type Application } from "express";
import logger from "../config/logger.config";
import swaggerDocs from "../config/swagger.config";

export default function setupServer(
  app: Application,
  APP_HOST: string,
  APP_PORT: number,
  tryInitializeDatabase: () => Promise<void>
): void {
  const BASE_URL = `http://${APP_HOST}:${APP_PORT}`;

  app.listen(APP_PORT, APP_HOST, async () => {
    await tryInitializeDatabase();
    logger.info(`Application is running at ${BASE_URL}`);
    logger.info("Application is running in " + process.env.NODE_ENV + " mode");
    swaggerDocs(app, BASE_URL);
  });
}
