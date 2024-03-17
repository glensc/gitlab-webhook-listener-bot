import { Request, Response } from "express";

import registry from "../services/registry";
import webhook from "../services/webhook";
import { Headers } from "../types";

const required_headers = [
  "user-agent",
  "x-gitlab-event",
  "x-gitlab-event-uuid",
  "x-gitlab-instance",
  "x-gitlab-webhook-uuid",
];

const validate_headers = (headers: Request["headers"]): Headers => {
  const missing: string[] = [];

  for (const key of required_headers) {
    if (!headers[key] || typeof headers[key] !== "string") {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    throw new Error("Missing or invalid required headers: " + missing.join(", "));
  }

  return headers as Headers;
}

// Listener for GitLab WebHooks
export default async ({ body: payload, headers: incoming_headers }: Request, res: Response) => {
  try {
    const headers = validate_headers(incoming_headers)

    await webhook.handle({
      headers,
      payload,
    });
    res.send("ok\n");
  } catch (e: any) {
    registry.logger.error(e.message);
    res.status(500);
    res.send("err\n");
  }
};
