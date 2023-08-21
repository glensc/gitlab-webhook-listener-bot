import { BaseHandler } from "./BaseHandler";
import { Handler } from "./Handler";
import { MergeRequestPayload } from "../payload";
import { Event, EVENT_TYPES } from "../types";

export abstract class MergeRequestHandler<P = MergeRequestPayload> extends BaseHandler implements Handler {
  public event_types = [EVENT_TYPES.MERGE_REQUEST];
  public abstract isValid(event: Event<P>): boolean;
  public abstract handle(event: Event<P>): Promise<void>;
}
