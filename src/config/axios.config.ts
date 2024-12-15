import axios from "axios";
import * as https from "https";
import { readEnv } from "./readEnv.config";

const URL = readEnv("URL") as string;

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const headers = {
  "content-type": "application/json",
};

export const customAxiosInstance = axios.create({
  baseURL: URL,
  headers,
  httpsAgent,
});
