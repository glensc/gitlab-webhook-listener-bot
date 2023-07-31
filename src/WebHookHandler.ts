import { Event } from "./types";
import { LoggerInterface } from "./services/logger";
import { Handler } from "./handlers/handler";

export class WebHookHandler {
  private handlers: Record<string, Handler[]> = {};

  public constructor(
    private readonly logger: LoggerInterface,
  ) {
  }

  public setHandlers(handlers: Handler[]): void {
    this.handlers = this.configureHandlers(handlers);
  }

  public async handle({ headers, payload }: Event): Promise<void> {
    if (!headers["x-gitlab-event"]) {
      this.logger.debug("No X-Gitlab-Event header");
      return;
    }

    const {
      event_type,
      user: {
        name: user_name,
        username: user_handle,
      },
    } = payload;

    this.logger.debug(`Handling event of type: ${event_type} by @${user_handle} (${user_name})`);
    for (const handler of Object.values(this.handlers[event_type] || [])) {
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
