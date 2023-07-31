import { logger, main } from "../../src";
import { RenovateRebase } from "./RenovateRebase";

main({
  logger,
  handlers: [
    new RenovateRebase(logger),
  ],
});
