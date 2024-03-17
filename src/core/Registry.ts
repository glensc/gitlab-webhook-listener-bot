import type { LoggerInterface } from "../services/logger";
import type { ProbeHandler } from "../types";

interface RegistryInterface {
  logger: LoggerInterface;
  livenessProbe: ProbeHandler;
  readinessProbe: ProbeHandler;
  shutdownHandler: ProbeHandler;
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

  public set livenessProbe(probe: ProbeHandler) {
    this.registry.set("livenessProbe", probe);
  }

  public get livenessProbe(): ProbeHandler {
    return this.registry.get("livenessProbe");
  }

  public set readinessProbe(probe: ProbeHandler) {
    this.registry.set("readinessProbe", probe);
  }

  public get readinessProbe(): ProbeHandler {
    return this.registry.get("readinessProbe");
  }

  public set shutdownHandler(handler: ProbeHandler) {
    this.registry.set("shutdownHandler", handler);
  }

  public get shutdownHandler(): ProbeHandler {
    return this.registry.get("shutdownHandler");
  }
}
