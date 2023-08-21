import { Handler } from "./Handler";
import { LoggerInterface } from "../services/logger";

export class HandlerRegistry {
  private handlers: Record<string, Handler[]> = {};

  public constructor(
    private readonly logger: LoggerInterface,
  ) {
  }

  public getHandlersByEventType(event_type: string) {
      return Object.values(this.handlers[event_type] || []);
  }

  public addHandlers(handlers: Handler[]): void {
    for (const handler of handlers) {
      if (!handler.event_types) {
        this.logger.error(`Handler does not define event_types: ${handler.constructor.name}`);
        continue;
      }

      for (const event_type of handler.event_types) {
        if (!this.handlers[event_type]) {
          this.handlers[event_type] = [];
        }

        this.logger.debug(`Register "${event_type}" handler: ${handler.constructor.name}`);
        this.handlers[event_type].push(handler)
      }
    }
  }
}
