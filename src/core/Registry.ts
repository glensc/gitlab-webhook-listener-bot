import { LoggerInterface } from "../services/logger";
import { ProbeHandler } from "../types";

interface RegistryInterface {
  logger: LoggerInterface;
}

export class Registry {
  private readonly registry = new Map<keyof RegistryInterface, any>();

  public constructor(
    registry: RegistryInterface,
  ) {
    for (const [key, value] of Object.entries(registry)) {
      this.registry.set(key as keyof RegistryInterface, value);
    }
  }

  public set logger(logger: LoggerInterface) {
    this.registry.set("logger", logger);
  }

  public get logger(): LoggerInterface {
    return this.registry.get("logger");
  }
}
