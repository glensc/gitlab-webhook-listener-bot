import { Payload } from "../payload";

export interface Handler {
  event_type: string;
  isValid(payload: Payload): boolean;
  handle(payload: Payload): Promise<void>;
}
