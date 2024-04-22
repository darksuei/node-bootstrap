import path from "path";
import { DataSource } from "typeorm";
import { readEnv } from "../config/readEnv.config";

const DB_HOST = readEnv("DB_HOST");
const DB_PORT = parseInt(readEnv("DB_PORT") as string);
const DB_USERNAME = readEnv("DB_USERNAME");
const DB_PASSWORD = readEnv("DB_PASSWORD");
const DB_DATABASE = readEnv("DB_DATABASE");
const DB_DATABASE_TYPE = readEnv("DB_DATABASE_TYPE");

export const AppDataSource = new DataSource({
  type: <"mysql" | "postgres">DB_DATABASE_TYPE,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, "../entity/*.{js,ts}")],
  migrations: [],
  subscribers: [],
  ssl: {
    rejectUnauthorized: false,
  },
});
