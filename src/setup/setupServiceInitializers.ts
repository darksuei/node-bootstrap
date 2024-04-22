import logger from "../config/logger.config";
import { initializeDatabase } from "../database/initDatabase";

export async function tryInitializeDatabase(): Promise<void> {
  try {
    await initializeDatabase();
  } catch (error: any) {
    logger.error("Database Initialization error: " + error.message);
    logger.info("Retrying in 3 seconds...");

    // Retry after 3 seconds
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    setTimeout(tryInitializeDatabase, 3000);
  }
}
