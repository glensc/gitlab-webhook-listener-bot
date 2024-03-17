import { LoggerInterface } from "../services/logger";
import { EVENT_TYPES } from "../types";

import { Handler } from "./Handler";
import { Registry } from "./Registry";

export class HandlerRegistry {
  private handlers: Record<string, Handler[]> = {};

  public constructor(
    private readonly registry: Registry,
  ) {
  }

  private get logger(): LoggerInterface {
    return this.registry.logger;
  }

  public getHandlersByEventType(event_type: string) {
    return new Set([
      this.handlers[EVENT_TYPES.ANY] || [],
      this.handlers[event_type] || [],
    ].flat());
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
