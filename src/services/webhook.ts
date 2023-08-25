import { WebHookHandler } from "../core/WebHookHandler";
import queue from "./queue";
import registry from "./registry";

export default new WebHookHandler(queue, registry);
