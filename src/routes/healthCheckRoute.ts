/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res.send({ message: "OK" });
});

export default router;
