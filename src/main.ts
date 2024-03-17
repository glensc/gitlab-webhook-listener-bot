import { Handler } from "./core/Handler";
import handlerRegister from "./services/handlers";
import serverBuilder from "./services/httpServer";
import { LoggerInterface } from "./services/logger";
import registry from "./services/registry";
import worker from "./services/worker";
import { ProbeHandler } from "./types";
import { urlPath } from "./util";

type Options = {
  handlers?: Handler[],
  logger: LoggerInterface,
  livenessProbe?: ProbeHandler,
  readinessProbe?: ProbeHandler,
  shutdownHandler?: ProbeHandler,
  port?: number,
  prefix?: string,
};

export const main = (options: Options): void => {
  const {
    logger,
    handlers,
    livenessProbe,
    readinessProbe,
    shutdownHandler,
    port = 3000,
    prefix = "/",
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

  const server = serverBuilder(port, prefix);

  logger.info("🕞 Starting webserver");

  const app = server.listen(port, () => {
    const url: URL = server.get("url");

    logger.info("🕔 The server is now running at:");
    logger.info(` - ${url}`);
    logger.info(` - ${urlPath(url, "/probes/readiness")}`);
    logger.info(` - ${urlPath(url, "/probes/liveness")}`);
  });

  const exitHandler = (signal: string) => {
    return () => {
      logger.info(`${signal} signal received: closing HTTP server`);
      app.close(async () => {
        logger.info("HTTP server closed");
        await registry.shutdownHandler();
        process.exit();
      });
    };
  };

  process.on("SIGTERM", exitHandler("SIGTERM"));
  process.on("SIGINT", exitHandler("SIGINT"));
};
