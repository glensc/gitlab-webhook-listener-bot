import { Event } from "./types";
import { LoggerInterface } from "./services/logger";

export class WebHookHandler {
  public constructor(
    private readonly logger: LoggerInterface,
  ) {
  }

  public async handle({ headers, payload }: Event): Promise<void> {
    if (!headers["x-gitlab-event"]) {
      this.logger.debug("No X-Gitlab-Event header");
      return;
    }
  }
}
