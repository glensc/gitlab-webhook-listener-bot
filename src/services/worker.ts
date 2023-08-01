import { QueueWorker } from "../queue/QueueWorker";
import queue from "./queue";
import handlers from "./handlers";
import logger from "./logger";

export default new QueueWorker(queue, handlers, logger);
