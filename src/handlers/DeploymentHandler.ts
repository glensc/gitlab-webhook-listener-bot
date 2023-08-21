import { BaseHandler } from "./BaseHandler";
import { Handler } from "./Handler";
import { DeploymentPayload } from "../payload";
import { Event } from "../types";

export abstract class DeploymentHandler<P = DeploymentPayload> extends BaseHandler implements Handler {
  public event_types = ["deployment"];
  public abstract isValid(event: Event<P>): boolean;
  public abstract handle(event: Event<P>): Promise<void>;
}
