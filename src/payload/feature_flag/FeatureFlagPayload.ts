import { Payload } from "../Payload";
import { Project } from "../Project";
import { User } from "../User";

import { FeatureFlagObjectAttributes } from "./FeatureFlagObjectAttributes";

export interface FeatureFlagPayload extends Payload {
  project: Project;
  user: User;
  user_url: string;
  object_attributes: FeatureFlagObjectAttributes;
}
