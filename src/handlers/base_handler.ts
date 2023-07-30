import { LoggerInterface } from "../services/logger";

export abstract class BaseHandler {
  public constructor(
    protected readonly logger: LoggerInterface,
  ) {
  }
}
