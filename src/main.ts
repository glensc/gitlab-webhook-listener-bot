import server from "./services/httpServer";
import { LoggerInterface } from "./services/logger";
import { Handler } from "./handlers/handler";
import { urlPath } from "./urlPath";
import handlerRegister from "./services/handlers";

type Options = {
  handlers?: Handler[],
  logger: LoggerInterface,
};

export const main = ({
                       logger,
                       handlers,
                     }: Options): void => {

  if (handlers) {
    handlerRegister.addHandlers(handlers);
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
