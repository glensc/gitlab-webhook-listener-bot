import type { FeatureFlagObjectAttributes } from "./FeatureFlagObjectAttributes";
import type { Payload } from "../Payload";
import type { Project } from "../Project";
import type { User } from "../User";

export interface FeatureFlagPayload extends Payload {
  project: Project;
  user: User;
  user_url: string;
  object_attributes: FeatureFlagObjectAttributes;
}
