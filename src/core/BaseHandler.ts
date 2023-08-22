import { LoggerInterface } from "../services/logger";
import { Event, EVENT_TYPES } from "../types";
import { Handler } from "./Handler";

export abstract class BaseHandler<P = any> implements Handler {
  public event_types = [EVENT_TYPES.ANY];

  public constructor(
    protected readonly logger: LoggerInterface,
  ) {
  }

  public abstract isValid(event: Event<P>): boolean;
  public abstract handle(event: Event<P>): Promise<void>;
}
