import { BaseHandler } from "../core/BaseHandler";
import { Handler } from "../core/Handler";
import { DeploymentPayload } from "../payload";
import { Event, EVENT_TYPES } from "../types";

export abstract class DeploymentHandler<P = DeploymentPayload> extends BaseHandler<P> implements Handler {
  public event_types = [EVENT_TYPES.DEPLOYMENT];
}
