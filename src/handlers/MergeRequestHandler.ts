import { BaseHandler } from "../core/BaseHandler";
import { EVENT_TYPES } from "../types";

import type { MergeRequestPayload } from "../payload";

export abstract class MergeRequestHandler<P = MergeRequestPayload> extends BaseHandler<P> {
  public event_types = [EVENT_TYPES.MERGE_REQUEST];
}
