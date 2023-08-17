import { BaseHandler } from "./base_handler";
import { Handler } from "./handler";
import { DeploymentPayload } from "./types";

export abstract class DeploymentHandler extends BaseHandler implements Handler {
  public event_type = "deployment";

  public abstract handle(payload: DeploymentPayload): Promise<void>;
}
