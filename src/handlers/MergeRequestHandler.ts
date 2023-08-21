import { BaseHandler } from "./BaseHandler";
import { Handler } from "./Handler";
import { MergeRequestPayload } from "../payload";
import { Event } from "../types";

export abstract class MergeRequestHandler<P = MergeRequestPayload> extends BaseHandler implements Handler {
  public event_type = "merge_request";
  public abstract isValid(event: Event<P>): boolean;
  public abstract handle(event: Event<P>): Promise<void>;
}
