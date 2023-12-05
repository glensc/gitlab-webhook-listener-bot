import { logger, main } from "../../src";
import { RenovateRebase } from "./handlers/RenovateRebase";
import { EventLogger } from "./handlers/EventLogger";
import { ProjectCreateEvent } from "./handlers/ProjectCreateEvent";

main({
  logger,
  handlers: [
    new EventLogger(logger),
    new ProjectCreateEvent(logger),
    new RenovateRebase(logger),
  ],
  async livenessProbe() {
    logger.debug("Called livenessProbe");
  },
  async readinessProbe() {
    logger.debug("Called readinessProbe");
  },
});
