import { Request, Response } from "express";
import webhook from "../services/webhook";
import registry from "../services/registry";

// Listener for GitLab WebHooks
export default async ({ body: payload, headers }: Request, res: Response) => {
  try {
    await webhook.handle({headers, payload});
    res.send("ok\n");
  } catch (e: any) {
    registry.logger.error(e.message);
    res.send("err\n");
  }
};
