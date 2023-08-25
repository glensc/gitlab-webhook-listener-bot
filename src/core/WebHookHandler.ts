import { Queue } from "../queue/Queue";
import { Event } from "../types";
import { LoggerInterface } from "../services/logger";
import { Registry } from "./Registry";

export class WebHookHandler {
  public constructor(
    private readonly queue: Queue,
    private readonly registry: Registry,
  ) {
  }

  private get logger(): LoggerInterface {
    return this.registry.logger;
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

    this.queue.put(event);
  }
}
