import { Request, Response } from "express";
import logger from "../services/logger";
import webhook from "../services/webhook";

// Listener for GitLab WebHooks
export default async ({ body: payload, headers }: Request, res: Response) => {
  try {
    await webhook.handle({headers, payload});
    res.send("ok\n");
  } catch (e: any) {
    logger.error(e.message);
    res.send("err\n");
  }
};
