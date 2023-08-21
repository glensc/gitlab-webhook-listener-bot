import { Event } from "../types";

export interface Handler {
  event_types: string[];
  isValid(event: Event): boolean;
  handle(event: Event): Promise<void>;
}
