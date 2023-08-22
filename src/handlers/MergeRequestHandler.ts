import { BaseHandler } from "../core/BaseHandler";
import { Handler } from "../core/Handler";
import { MergeRequestPayload } from "../payload";
import { Event, EVENT_TYPES } from "../types";

export abstract class MergeRequestHandler<P = MergeRequestPayload> extends BaseHandler<P> implements Handler {
  public event_types = [EVENT_TYPES.MERGE_REQUEST];
}
