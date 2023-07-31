import pino from "pino";

export type LoggerInterface = Pick<ReturnType<typeof pino>, "debug" | "info" | "error">;

const logger = pino({
  level: "debug",
  transport: {
    target: "pino-pretty",
  },
});

export default logger;
