import express from "express";
import cors from "cors";
import setupMiddlewares from "./setup/setupMiddlewares";
import setupRoutes from "./setup/setupRoutes";
import useragent from "express-useragent";

const app = express();
app.use(express.json());
app.use(cors());
app.use(useragent.express());

setupMiddlewares(app);
setupRoutes(app);

export default app;
