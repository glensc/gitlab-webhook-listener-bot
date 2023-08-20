export { main as default } from "./main";
export { main } from "./main";
export { default as logger } from "./services/logger";

// Reusable classes and types
export type { Handler } from "./handlers/Handler"
export type { LoggerInterface } from "./services/logger";
export * from "./payload";

export { BaseHandler } from "./handlers/BaseHandler";
export { MergeRequestHandler } from "./handlers/MergeRequestHandler";
export { DeploymentHandler } from "./handlers/DeploymentHandler";
