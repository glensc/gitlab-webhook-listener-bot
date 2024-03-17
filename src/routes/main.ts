import type { Request, Response } from "express";

export default (req: Request, res: Response) => {
  res.contentType("text/plain");
  res.send("Gitlab WebHook Listener Bot - https://github.com/glensc/gitlab-webhook-listener-bot");
};
