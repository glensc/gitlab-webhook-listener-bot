import { BaseHandler } from "../core/BaseHandler";
import { EVENT_TYPES } from "../types";

import type { JobPayload } from "../payload";

export abstract class JobHandler<P = JobPayload> extends BaseHandler<P> {
  public event_types = [EVENT_TYPES.JOB];
}
