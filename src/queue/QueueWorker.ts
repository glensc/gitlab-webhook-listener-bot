import { setTimeout } from "node:timers/promises";
import { Queue } from "./Queue";
import { LoggerInterface } from "../services/logger";
import { Event } from "../types";
import { HandlerRegistry } from "../core/HandlerRegistry";
import { Registry } from "../core/Registry";

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
    setImmediate(() => this.run());
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

  private async handle(event: Event) {
    const {
      event_type,
      object_kind,
    } = event.payload;

    for (const handler of this.handlers.getHandlersByEventType(event_type || object_kind)) {
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
