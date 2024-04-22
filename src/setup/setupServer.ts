import { type Application } from "express";
import logger from "../config/logger.config";
import { readEnv } from "../config/readEnv.config";

export default function setupServer(
  app: Application,
  APP_HOST: string,
  APP_PORT: number,
  tryInitializeDatabase: () => Promise<void>
): void {
  app.listen(APP_PORT, APP_HOST, async () => {
    logger.info(`Application is running on http://${APP_HOST}:${APP_PORT}/api/v1`);
    logger.info("Application is running in " + readEnv("NODE_ENV") + " mode");
    await tryInitializeDatabase();
  });
}
