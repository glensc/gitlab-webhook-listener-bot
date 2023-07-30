import server from "./services/httpServer";
import { LoggerInterface } from "./services/logger";
import webHookHandler from "./services/webHookHandler";
import { Handler } from "./handlers/handler";

type Options = {
  handlers?: Handler[],
  logger: LoggerInterface,
};

export const main = ({
                       logger,
                       handlers,
                     }: Options): void => {
  if (handlers) {
    webHookHandler.setHandlers(handlers);
  }

  logger.info("🕞 Starting webserver");

  const port = server.get("port");

  server.listen(port, () => {
    const url = server.get("url");

    logger.info("🕔 The server is now running at:");
    logger.info(` - ${url}`);
  });
};
