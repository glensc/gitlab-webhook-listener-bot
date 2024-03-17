import { QueueWorker } from "../queue/QueueWorker";

import handlers from "./handlers";
import queue from "./queue";
import registry from "./registry";

export default new QueueWorker(queue, handlers, registry);
