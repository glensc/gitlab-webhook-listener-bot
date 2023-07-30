import { Request } from "express";

export type Event = {
  headers: Request["headers"];
  payload: Request["body"];
}
