import { LoggerInterface } from "../services/logger";
import { WebhookEvent, EVENT_TYPES } from "../types";

import { Handler } from "./Handler";

export abstract class BaseHandler<P = any> implements Handler {
  public event_types = [EVENT_TYPES.ANY];

  public constructor(
    protected readonly logger: LoggerInterface,
  ) {
  }

  public abstract isValid(event: WebhookEvent<P>): boolean;
  public abstract handle(event: WebhookEvent<P>): Promise<void>;
}
