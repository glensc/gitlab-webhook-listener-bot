import { BaseHandler } from "../core/BaseHandler";
import { EVENT_TYPES } from "../types";

import type { IssuePayload } from "../payload";

export abstract class IssueHandler<P = IssuePayload> extends BaseHandler<P> {
  public event_types = [EVENT_TYPES.ISSUE];
}
