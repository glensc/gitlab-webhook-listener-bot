import { Request, Response } from "express";
import logger from "../logger";
import webHookHandler from "../webHookHandler";

// Listener for GitLab WebHooks
export default async ({ body: payload, headers }: Request, res: Response) => {
  try {
    await webHookHandler.handle({headers, payload});
    res.send("ok\n");
  } catch (e: any) {
    logger.error(e.message);
    res.send("err\n");
  }
};
