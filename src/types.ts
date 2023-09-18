import { Request } from "express";

// https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#delivery-headers
type Headers = Request["headers"] & {
  "user-agent": string;
  "x-gitlab-event": string;
  "x-gitlab-event-uuid": string;
  "x-gitlab-instance": string;
  "x-gitlab-webhook-uuid": string;
};

export type Event<P = any> = {
  headers: Request["headers"];
  payload: P;
}

export enum EVENT_TYPES {
  ANY = "any",
  DEPLOYMENT = "deployment",
  ISSUE = "issue",
  JOB = "build",
  MERGE_REQUEST = "merge_request",
  NOTE = "note",
  PIPELINE = "pipeline",
  PROJECT_CREATE = "project_create",
  PROJECT_RENAME = "project_rename",
  PROJECT_UPDATE = "project_update",
}
