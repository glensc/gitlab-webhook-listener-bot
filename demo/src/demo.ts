import { logger, main } from "../../src";
import { RenovateRebase } from "./RenovateRebase";
import { EventLogger } from "./EventLogger";

main({
  logger,
  handlers: [
    new EventLogger(logger),
    new RenovateRebase(logger),
  ],
});
