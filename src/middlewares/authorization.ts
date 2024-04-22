import jwt from "jsonwebtoken";
import { readEnv } from "../config/readEnv.config";
import { AuthRequest } from "../types/express";
import { UserEntity } from "../entity/UserEntity";
import { AppDataSource } from "../database/dataSource";
import { type JWTUser } from "../types/jwtUser";
import { type Response, type NextFunction } from "express";

const JWT_SECRET = readEnv("JWT_SECRET") as string;

/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
export async function authenticateJWT(req: AuthRequest, res: Response, next: NextFunction) {
  const authorization = req.header("Authorization");

  if (!authorization) {
    return res.status(401).send({ message: "Invalid authorization header" });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const jwtUser = jwt.verify(token, JWT_SECRET) as JWTUser;
    const user = await AppDataSource.manager.findOne(UserEntity, {
      where: { email: jwtUser.email },
    });

    if (user == null) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Authorization Failed", error });
  }
}
