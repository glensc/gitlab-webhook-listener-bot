import server from "./services/httpServer";
import { LoggerInterface } from "./services/logger";
import { Handler } from "./core/Handler";
import { urlPath } from "./util";
import handlerRegister from "./services/handlers";
import worker from "./services/worker";
import registry from "./services/registry";
import { ProbeHandler } from "./types";

type Options = {
  handlers?: Handler[],
  logger: LoggerInterface,
  livenessProbe?: ProbeHandler,
  readinessProbe?: ProbeHandler,
  shutdownHandler?: ProbeHandler,
};

export const main = (options: Options): void => {
  const {
    logger,
    handlers,
    livenessProbe,
    readinessProbe,
    shutdownHandler,
  } = options;

  registry.logger = logger;
  if (livenessProbe) {
    registry.livenessProbe = livenessProbe;
  }
  if (readinessProbe) {
    registry.readinessProbe = readinessProbe;
  }
  if (shutdownHandler) {
    registry.shutdownHandler = shutdownHandler;
  }

  if (handlers) {
    handlerRegister.addHandlers(handlers);
    worker.start();
  }

  logger.info("🕞 Starting webserver");

  const port = server.get("port");

  const app = server.listen(port, () => {
    const url: URL = server.get("url");

    logger.info("🕔 The server is now running at:");
    logger.info(` - ${url}`);
    logger.info(` - ${urlPath(url, "/probes/readiness")}`);
    logger.info(` - ${urlPath(url, "/probes/liveness")}`);
  });

  const exitHandler = () => {
    logger.info("SIGTERM signal received: closing HTTP server");
    app.close(async() => {
      logger.info("HTTP server closed");
      await registry.shutdownHandler();
      process.exit();
    });
  };
  process.on("SIGTERM", exitHandler);
};
