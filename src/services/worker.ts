import { QueueWorker } from "../queue/QueueWorker";
import queue from "./queue";
import handlers from "./handlers";
import registry from "./registry";

export default new QueueWorker(queue, handlers, registry);
