import { BaseHandler } from "../core/BaseHandler";
import { MergeRequestPayload } from "../payload";
import { EVENT_TYPES } from "../types";

export abstract class MergeRequestHandler<P = MergeRequestPayload> extends BaseHandler<P> {
  public event_types = [EVENT_TYPES.MERGE_REQUEST];
}
