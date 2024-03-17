import handlerRegister from "./services/handlers";
import serverBuilder from "./services/httpServer";
import registry from "./services/registry";
import worker from "./services/worker";
import { urlPath } from "./util";

import type { Handler } from "./core/Handler";
import type { LoggerInterface } from "./services/logger";
import type { ProbeHandler } from "./types";

type Options = {
  handlers?: Handler[];
  logger: LoggerInterface;
  livenessProbe?: ProbeHandler;
  readinessProbe?: ProbeHandler;
  shutdownHandler?: ProbeHandler;
  port?: number;
  prefix?: string;
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
    logger.info(` - GET ${url}`);
    logger.info(` - POST ${url}`);
    logger.info(` - GET ${urlPath(url, "/probes/readiness")}`);
    logger.info(` - GET ${urlPath(url, "/probes/liveness")}`);
  });

  const exitHandler = (signal: string) => {
    return () => {
      logger.info(`${signal} signal received: closing HTTP server`);
      app.close(() => {
        logger.info("HTTP server closed");
        registry.shutdownHandler()
          .then(() => process.exit());
      });
    };
  };

  process.on("SIGTERM", exitHandler("SIGTERM"));
  process.on("SIGINT", exitHandler("SIGINT"));
};
