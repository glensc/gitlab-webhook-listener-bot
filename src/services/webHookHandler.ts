import { WebHookHandler } from "../WebHookHandler";
import logger from "./logger";
import queue from "./queue";

export default new WebHookHandler(queue, logger);
