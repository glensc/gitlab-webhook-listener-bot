import { Request, Response } from "express";
import logger from "../logger";

// Listener for GitLab WebHooks
export default async ({ body: payload, headers }: Request, res: Response) => {
  try {
    res.send("ok\n");
  } catch (e: any) {
    logger.error(e.message);
    res.send("err\n");
  }
};
