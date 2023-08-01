import { setTimeout } from "node:timers/promises";
import { Queue } from "./Queue";
import { LoggerInterface } from "../services/logger";
import { Event } from "../types";
import { HandlerRegistry } from "../handlers/HandlerRegistry";

export class QueueWorker {
  private readonly interval = 1000;

  public constructor(
    private readonly queue: Queue,
    private readonly handlers: HandlerRegistry,
    private readonly logger: LoggerInterface,
  ) {
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

  private async handle({ payload }: Event) {
    const {
      event_type,
    } = payload;

    for (const handler of this.handlers.getHandlersByEventType(event_type)) {
      try {
        await handler.handle(payload);
      } catch (e: any) {
        this.logger.error(`Handler ${handler.constructor.name} crashed: ${e.message}`);
      }
    }
  }
}
