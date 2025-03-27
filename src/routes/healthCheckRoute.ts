import { type Response, Router } from "express";

const router = Router();

router.get("/", (_, res: Response) => {
  res.send({ message: "OK" });
});

export default router;
