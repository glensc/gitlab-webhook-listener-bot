import { BaseHandler } from "../core/BaseHandler";
import { EVENT_TYPES } from "../types";

import type { DeploymentPayload } from "../payload";

export abstract class DeploymentHandler<P = DeploymentPayload> extends BaseHandler<P> {
  public event_types = [EVENT_TYPES.DEPLOYMENT];
}
