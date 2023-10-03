import { logger, main } from "../../src";
import { RenovateRebase } from "./RenovateRebase";
import { EventLogger } from "./EventLogger";
import { ProjectCreateEvent } from "./ProjectCreateEvent";

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
