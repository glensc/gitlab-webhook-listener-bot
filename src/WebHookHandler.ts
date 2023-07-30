import { Event } from "./types";
import { LoggerInterface } from "./services/logger";
import { Handler } from "./handlers/handler";

export class WebHookHandler {
  private readonly handlers: Record<string, Handler[]>;

  public constructor(
    handlers: Handler[],
    private readonly logger: LoggerInterface,
  ) {
    this.handlers = this.configureHandlers(handlers);
  }

  public async handle({ headers, payload }: Event): Promise<void> {
    if (!headers["x-gitlab-event"]) {
      this.logger.debug("No X-Gitlab-Event header");
      return;
    }

    this.logger.debug(`Handling event of type: ${payload.event_type}`);
    for (const handler of Object.values(this.handlers[payload.event_type] || [])) {
      await handler.handle(payload);
    }
  }

  private configureHandlers(handlers: Handler[]): Record<string, Handler[]> {
    const handlersByType: Record<string, Handler[]> = {};

    for (const handler of handlers) {
      if (!handler.event_type) {
        this.logger.error(`Handler does not define event_type: ${handler.constructor.name}`);
        continue;
      }

      if (!handlersByType[handler.event_type]) {
        handlersByType[handler.event_type] = [];
      }

      this.logger.debug(`Register "${handler.event_type}" handler: ${handler.constructor.name}`);
      handlersByType[handler.event_type].push(handler)
    }

    return handlersByType;
  }
}
