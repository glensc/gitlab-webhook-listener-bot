import { Request } from "express";

export type Event<P = any> = {
  headers: Request["headers"];
  payload: P;
}

export enum EVENT_TYPES {
  DEPLOYMENT = "deployment",
  MERGE_REQUEST = "merge_request",
}
