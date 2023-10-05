import { Registry } from "../core/Registry";
import logger from "./logger";

const noop = async (): Promise<void> => {};

export default new Registry({
  "logger": logger,
  "livenessProbe": noop,
  "readinessProbe": noop,
});
