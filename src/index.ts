import "reflect-metadata";
import app from "./app";
import setupServer from "./setup/setupServer";
import { configureEnvironment, readEnv } from "./services/readEnv.config";
import { tryInitializeDatabase } from "./setup/setupServiceInitializers";
import dotenv from "dotenv";
import path from "path";

// configureEnvironment();

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

const APP_HOST = readEnv("APP_HOST", "") as string;
const APP_PORT = readEnv("APP_PORT", 5000, true) as number;

console.log(process.env.NODE_ENV, process.env.APP_HOST, process.env.APP_PORT);

setupServer(app, APP_HOST, APP_PORT, tryInitializeDatabase);
