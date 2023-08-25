import server from "./services/httpServer";
import { LoggerInterface } from "./services/logger";
import { Handler } from "./core/Handler";
import { urlPath } from "./urlPath";
import handlerRegister from "./services/handlers";
import worker from "./services/worker";
import registry from "./services/registry";

type Options = {
  handlers?: Handler[],
  logger: LoggerInterface,
};

export const main = ({
                       logger,
                       handlers,
                     }: Options): void => {

  registry.logger = logger;

  if (handlers) {
    handlerRegister.addHandlers(handlers);
    worker.start();
  }

  logger.info("🕞 Starting webserver");

  const port = server.get("port");

  server.listen(port, () => {
    const url: URL = server.get("url");

    logger.info("🕔 The server is now running at:");
    logger.info(` - ${url}`);
    logger.info(` - ${urlPath(url, "/probes/readiness")}`);
    logger.info(` - ${urlPath(url, "/probes/liveness")}`);
  });
};
