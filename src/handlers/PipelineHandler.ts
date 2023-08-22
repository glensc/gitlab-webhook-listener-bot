import { BaseHandler } from "../core/BaseHandler";
import { PipelinePayload } from "../payload";
import { EVENT_TYPES } from "../types";

export abstract class PipelineHandler<P = PipelinePayload> extends BaseHandler<P>  {
  public event_types = [EVENT_TYPES.PIPELINE];
}
