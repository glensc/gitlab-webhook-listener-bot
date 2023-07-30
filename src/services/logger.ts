import pino from "pino";

export type LoggerInterface = ReturnType<typeof pino>;

const logger = pino({
  level: "debug",
  transport: {
    target: "pino-pretty",
  },
});

export default logger;
