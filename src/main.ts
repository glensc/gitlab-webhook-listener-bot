import server from "./services/httpServer";
import logger from "./services/logger";

const main = (): void => {
  logger.info("🕞 Starting webserver");

  const port = server.get("port");

  server.listen(port, () => {
    const url = server.get("url");

    logger.info("🕔 The server is now running at:");
    logger.info(` - ${url}`);
  });
};

main();
