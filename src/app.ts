import cors from "cors";
import express from "express";
import setupRoutes from "./setup/setupRoutes";
import setupMiddlewares from "./setup/setupMiddlewares";

const app = express();
app.use(express.json());
app.use(cors());

setupMiddlewares(app);
setupRoutes(app);

export default app;
