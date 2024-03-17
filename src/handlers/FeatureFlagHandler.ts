import { BaseHandler } from "../core/BaseHandler";
import { FeatureFlagPayload } from "../payload";
import { EVENT_TYPES } from "../types";

export abstract class FeatureFlagHandler<P = FeatureFlagPayload> extends BaseHandler<P> {
  public event_types = [EVENT_TYPES.FEATURE_FLAG];
}
