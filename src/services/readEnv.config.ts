import dotenv from "dotenv";
import path from "path";
import logger from "./logger.config";

export function configureEnvironment(): void {
  if (process.env.NODE_ENV === "production") {
    dotenv.config({
      path: path.resolve(process.cwd(), ".env.production"),
      override: true,
    });
  } else {
    dotenv.config({
      path: path.resolve(process.cwd(), ".env"),
      override: true,
    });
  }
  logger.info("Application is running in " + process.env.NODE_ENV + " mode"); // Logs the current environment
}

export function readEnv(key: unknown, defaultValue: string | number, isNumeric: boolean = false): any {
  const value = process.env[key as string];

  if (value !== null && value !== undefined) {
    return isNumeric ? parseInt(value) : value;
  }
  return defaultValue;
}
