import { LoggerInterface } from "../services/logger";

export class Registry {
  public constructor(
    private _logger: LoggerInterface,
  ) {
  }

  public set logger(logger: LoggerInterface) {
    this._logger = logger;
  }

  public get logger(): LoggerInterface {
    return this._logger;
  }
}
