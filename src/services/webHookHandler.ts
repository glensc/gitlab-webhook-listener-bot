import { WebHookHandler } from "../WebHookHandler";
import logger from "./logger";
import handlerRegister from "./handlers";

export default new WebHookHandler(handlerRegister, logger);
