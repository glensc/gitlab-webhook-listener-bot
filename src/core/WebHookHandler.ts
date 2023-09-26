import { Queue } from "../queue/Queue";
import { WebhookEvent } from "../types";
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

  public async handle(event: WebhookEvent): Promise<void> {
    this.queue.put(event);
  }
}
