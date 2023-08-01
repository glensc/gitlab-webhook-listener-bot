import { Event } from "./types";
import { LoggerInterface } from "./services/logger";
import { Handler } from "./handlers/handler";
import { HandlerRegistry } from "./handlers/HandlerRegistry";

export class WebHookHandler {
  public constructor(
    private readonly handlers: HandlerRegistry,
    private readonly logger: LoggerInterface,
  ) {
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
    for (const handler of this.handlers.getHandlersByEventType(event_type)) {
      try {
        await handler.handle(payload);
      } catch (e: any) {
        this.logger.error(`Handler ${handler.constructor.name} crashed: ${e.message}`);
      }
    }
  }
}
