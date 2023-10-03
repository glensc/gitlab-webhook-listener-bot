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
  livenessProbe() {
    logger.debug("Called livenessProbe");
  },
  readinessProbe() {
    logger.debug("Called readinessProbe");
  },
});
