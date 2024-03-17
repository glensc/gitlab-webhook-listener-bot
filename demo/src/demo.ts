import { logger, main, GitlabClient } from "gitlab-webhook-listener-bot";

import {
  EventLogger,
  ProjectCreateEvent,
  RegistryCleanup,
  RenovateRebase,
} from "./handlers";

main({
  logger,
  handlers: [
    new EventLogger(logger),
    new ProjectCreateEvent(logger),
    new RenovateRebase(logger),
    new RegistryCleanup(new GitlabClient(process.env.GITLAB_URL || "", process.env.GITLAB_TOKEN || ""), logger),
  ],
  async livenessProbe() {
    logger.debug("Called livenessProbe");
  },
  async readinessProbe() {
    logger.debug("Called readinessProbe");
  },
});
