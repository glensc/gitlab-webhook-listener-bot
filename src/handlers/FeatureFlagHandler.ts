import { BaseHandler } from "../core/BaseHandler";
import { EVENT_TYPES } from "../types";
import { FeatureFlagPayload } from "../payload";

export abstract class FeatureFlagHandler<P = FeatureFlagPayload> extends BaseHandler<P> {
  public event_types = [EVENT_TYPES.FEATURE_FLAG];
}
