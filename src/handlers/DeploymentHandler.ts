import { BaseHandler } from "./BaseHandler";
import { Handler } from "./Handler";
import { DeploymentPayload } from "./types";

export abstract class DeploymentHandler extends BaseHandler implements Handler {
  public event_type = "deployment";

  public abstract isValid(payload: DeploymentPayload): boolean;
  public abstract handle(payload: DeploymentPayload): Promise<void>;
}
