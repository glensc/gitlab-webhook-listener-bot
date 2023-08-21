import { Event, EVENT_TYPES } from "../types";

export interface Handler {
  event_types: EVENT_TYPES[];
  isValid(event: Event): boolean;
  handle(event: Event): Promise<void>;
}
