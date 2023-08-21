import { Event } from "../types";

export interface Handler {
  event_type: string;
  isValid(event: Event): boolean;
  handle(event: Event): Promise<void>;
}
