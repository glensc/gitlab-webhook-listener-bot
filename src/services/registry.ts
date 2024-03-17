import { Registry } from "../core/Registry";
import { Probe } from "../types";

import logger from "./logger";

const noop = async (): Probe => {};

export default new Registry({
  "logger": logger,
  "livenessProbe": noop,
  "readinessProbe": noop,
  "shutdownHandler": noop,
});
