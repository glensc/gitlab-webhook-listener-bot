import { Payload } from "./types";

export interface Handler {
  event_type: string;
  handle(payload: Payload): Promise<void>;
}
