import "reflect-metadata";
import app from "./app";
import setupServer from "./setup/setupServer";
import { readEnv } from "./services/readEnv.config";
import { tryInitializeDatabase } from "./setup/setupServiceInitializers";

const APP_HOST = readEnv("APP_HOST") as string;
const APP_PORT = readEnv("APP_PORT", 5000, true) as number;

setupServer(app, APP_HOST, APP_PORT, tryInitializeDatabase);
