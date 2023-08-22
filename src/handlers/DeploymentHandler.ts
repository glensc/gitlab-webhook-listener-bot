import { BaseHandler } from "../core/BaseHandler";
import { DeploymentPayload } from "../payload";
import { EVENT_TYPES } from "../types";

export abstract class DeploymentHandler<P = DeploymentPayload> extends BaseHandler<P> {
  public event_types = [EVENT_TYPES.DEPLOYMENT];
}
