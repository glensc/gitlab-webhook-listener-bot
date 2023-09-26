import { WebhookEvent, EVENT_TYPES } from "../types";

export interface Handler {
  event_types: EVENT_TYPES[];
  isValid(event: WebhookEvent): boolean;
  handle(event: WebhookEvent): Promise<void>;
}
