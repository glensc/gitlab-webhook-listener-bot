import { WebHookHandler } from "../WebHookHandler";
import handlers from "./handlers";
import logger from "./logger";

export default new WebHookHandler(handlers, logger);
