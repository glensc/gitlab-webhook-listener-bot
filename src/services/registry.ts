import { Registry } from "../core/Registry";

import logger from "./logger";

import type { Probe } from "../types";

const noop = async (): Probe => {};

export default new Registry({
  logger: logger,
  livenessProbe: noop,
  readinessProbe: noop,
  shutdownHandler: noop,
});
