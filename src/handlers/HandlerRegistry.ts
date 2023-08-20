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
      if (!handler.event_type) {
        this.logger.error(`Handler does not define event_type: ${handler.constructor.name}`);
        continue;
      }

      if (!this.handlers[handler.event_type]) {
        this.handlers[handler.event_type] = [];
      }

      this.logger.debug(`Register "${handler.event_type}" handler: ${handler.constructor.name}`);
      this.handlers[handler.event_type].push(handler)
    }
  }
}
