import { Project } from "./Project";
import { User } from "./User";

export interface DeploymentPayload {
  object_kind: string;
  status: string;
  status_changed_at: string;
  deployment_id: number;
  deployable_id: number;
  deployable_url: string;
  environment: string;
  environment_tier: string;
  environment_slug: string;
  environment_external_url?: null;
  project: Project;
  short_sha: string;
  user: User;
  user_url: string;
  commit_url: string;
  commit_title: string;
  ref: string;
}
