import type { Registry } from "./Registry";
import type { Queue } from "../queue/Queue";
import type { LoggerInterface } from "../services/logger";
import type { WebhookEvent } from "../types";

export class WebHookHandler {
  public constructor(
    private readonly queue: Queue,
    private readonly registry: Registry,
  ) {
  }

  private get logger(): LoggerInterface {
    return this.registry.logger;
  }

  public async handle(event: WebhookEvent): Promise<void> {
    this.queue.put(event);
  }
}
