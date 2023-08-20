import { Payload } from "./types";

export interface Handler {
  event_type: string;
  isValid(payload: Payload): boolean;
  handle(payload: Payload): Promise<void>;
}
