import { BaseHandler } from "../core/BaseHandler";
import { IssuePayload } from "../payload";
import { EVENT_TYPES } from "../types";

export abstract class IssueHandler<P = IssuePayload> extends BaseHandler<P> {
  public event_types = [EVENT_TYPES.ISSUE];
}
