import path from "path";
import { DataSource } from "typeorm";
import { readEnv } from "../services/readEnv.config";

const DB_HOST: string = readEnv("DB_HOST") as string;
const DB_PORT: number = readEnv("DB_PORT", 5432, true) as number;
const DB_USERNAME: string = readEnv("DB_USERNAME") as string;
const DB_PASSWORD: string = readEnv("DB_PASSWORD") as string;
const DB_DATABASE: string = readEnv("DB_DATABASE") as string;
const DB_DATABASE_TYPE: string = readEnv("DB_DATABASE_TYPE") as string;

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
