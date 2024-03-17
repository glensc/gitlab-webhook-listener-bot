import { BaseHandler } from "../core/BaseHandler";
import { JobPayload } from "../payload";
import { EVENT_TYPES } from "../types";

export abstract class JobHandler<P = JobPayload> extends BaseHandler<P>  {
  public event_types = [EVENT_TYPES.JOB];
}
