import { WebHookHandler } from "../core/WebHookHandler";
import logger from "./logger";
import queue from "./queue";

export default new WebHookHandler(queue, logger);
