import { setTimeout } from "node:timers/promises";

import type { Queue } from "./Queue";
import type { HandlerRegistry } from "../core/HandlerRegistry";
import type { Registry } from "../core/Registry";
import type { LoggerInterface } from "../services/logger";
import type { WebhookEvent } from "../types";

export class QueueWorker {
  private readonly interval = 1000;

  public constructor(
    private readonly queue: Queue,
    private readonly handlers: HandlerRegistry,
    private readonly registry: Registry,
  ) {
  }

  private get logger(): LoggerInterface {
    return this.registry.logger;
  }

  public start() {
    setImmediate(() => {
      this.run();
    });
  }

  public async run() {
    while (true) {
      if (this.queue.size()) {
        const event = this.queue.get();

        await this.handle(event);
      }

      await setTimeout(this.interval);
    }
  }

  private async handle(event: WebhookEvent) {
    const {
      event_type,
      object_kind,
      event_name,
    } = event.payload;

    for (const handler of this.handlers.getHandlersByEventType(event_type || object_kind || event_name)) {
      try {
        if (!handler.isValid(event)) {
          continue;
        }

        await handler.handle(event);
      } catch (e: any) {
        this.logger.error(`Handler ${handler.constructor.name} crashed: ${e.message}`);
      }
    }
  }
}
