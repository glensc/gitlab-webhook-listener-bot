import logger from "./services/logger";
import { main } from "./entrypoint";
import handlers from './services/handlers';

main({
  logger,
  handlers,
});
