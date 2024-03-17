import { logger, main, GitlabClient } from "gitlab-webhook-listener-bot";

import {
  EventLogger,
  MergeRequestClose,
  ProjectCreateEvent,
  RegistryCleanup,
  RenovateRebase,
} from "./handlers";

const gitlabClient = new GitlabClient(process.env.GITLAB_URL || "", process.env.GITLAB_TOKEN || "");

main({
  logger,
  handlers: [
    new EventLogger(logger),
    new ProjectCreateEvent(logger),
    new RenovateRebase(logger),
    new MergeRequestClose(gitlabClient, logger),
    new RegistryCleanup(gitlabClient, logger),
  ],
  async livenessProbe() {
    logger.debug("Called livenessProbe");
  },
  async readinessProbe() {
    logger.debug("Called readinessProbe");
  },
});
