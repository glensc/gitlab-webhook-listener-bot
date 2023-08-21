import { Request } from "express";

export type Event<P = any> = {
  headers: Request["headers"];
  payload: P;
}
