/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type Request, type Response } from "express";

const router = express.Router();

router.get("/health", (_req: Request, res: Response) => {
  res.send({ message: "OK" });
});

export default router;
