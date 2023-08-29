import { Request } from "express";

export type Event<P = any> = {
  headers: Request["headers"];
  payload: P;
}

export enum EVENT_TYPES {
  ANY = "any",
  DEPLOYMENT = "deployment",
  JOB = "build",
  MERGE_REQUEST = "merge_request",
  NOTE = "note",
  PIPELINE = "pipeline",
  PROJECT_CREATE = "project_create",
  PROJECT_RENAME = "project_rename",
  PROJECT_UPDATE = "project_update",
}
