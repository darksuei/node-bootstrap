import dotenv from "dotenv";
import path from "path";

export function configureEnvironment(): void {
  if (process.env.NODE_ENV === "production") {
    dotenv.config({
      path: path.resolve(process.cwd(), ".env.production"),
      override: true,
    });
  } else if (process.env.NODE_ENV === "test") {
    dotenv.config({
      path: path.resolve(process.cwd(), ".env.test"),
      override: true,
    });
  } else {
    dotenv.config({
      path: path.resolve(process.cwd(), ".env"),
      override: true,
    });
  }
}
configureEnvironment();

export function readEnv(key: string, defaultValue?: string): string | undefined {
  const value = process.env[key];
  return value ?? defaultValue;
}

export function devEnvironment() {
  return process.env.NODE_ENV === "development";
}
