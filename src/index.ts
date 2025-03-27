import "reflect-metadata";
import { readEnv } from "./config/readEnv.config";
import app from "./app";
import setupServer from "./setup/setupServer";
import { tryInitializeDatabase } from "./setup/setupServiceInitializers";

const APP_HOST = readEnv("APP_HOST") as string;
const APP_PORT = parseInt(readEnv("APP_PORT") as string);

setupServer(app, APP_HOST, APP_PORT, tryInitializeDatabase);
