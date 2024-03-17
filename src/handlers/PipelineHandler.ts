import { BaseHandler } from "../core/BaseHandler";
import { EVENT_TYPES } from "../types";

import type { PipelinePayload } from "../payload";

export abstract class PipelineHandler<P = PipelinePayload> extends BaseHandler<P>  {
  public event_types = [EVENT_TYPES.PIPELINE];
}
