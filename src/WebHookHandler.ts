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
    const {
      "x-gitlab-event": event_name,
      "x-gitlab-event-uuid": event_uuid,
    } = headers;

    if (!event_name || !event_uuid) {
      this.logger.debug("No X-Gitlab-Event or X-Gitlab-Event-UUID header");
      return;
    }

    const {
      event_type,
      user: {
        name: user_name,
        username: user_handle,
      },
    } = payload;

    this.logger.debug(`Handling event ${event_uuid} of type: ${event_type} by @${user_handle} (${user_name})`);
    for (const handler of Object.values(this.handlers[event_type] || [])) {
      try {
        await handler.handle(payload);
      } catch (e: any) {
        this.logger.error(`Handler ${handler.constructor.name} crashed: ${e.message}`);
      }
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
