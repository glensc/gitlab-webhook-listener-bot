import { Event } from "./types";
import { LoggerInterface } from "./services/logger";
import { Queue } from "./queue/Queue";

export class WebHookHandler {
  public constructor(
    private readonly queue: Queue,
    private readonly logger: LoggerInterface,
  ) {
  }

  public async handle(event: Event): Promise<void> {
    const {
      "x-gitlab-event": event_name,
      "x-gitlab-event-uuid": event_uuid,
    } = event.headers;

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
    } = event.payload;

    this.logger.debug(`Received event ${event_uuid} of type: ${event_type} by @${user_handle} (${user_name})`);
    this.queue.put(event);
  }
}
