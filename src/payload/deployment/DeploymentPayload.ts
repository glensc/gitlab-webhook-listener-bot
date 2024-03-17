import { Payload } from "../Payload";
import { Project } from "../Project";
import { DateTime } from "../types";
import { User } from "../User";

export interface DeploymentPayload extends Payload {
  object_kind: "deployment";
  status: "running" | "failed" | "success" | "canceled";
  status_changed_at: DateTime;
  deployment_id: number;
  deployable_id: number;
  deployable_url: string;
  environment: string;
  environment_tier: string;
  environment_slug: string;
  environment_external_url: string | null;
  project: Project;
  short_sha: string;
  user: User;
  user_url: string;
  commit_url: string;
  commit_title: string;
  ref: string;
}
