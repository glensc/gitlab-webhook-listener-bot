import type { Commit } from "../Commit";
import type { Environment } from "../Environment";
import type { Payload } from "../Payload";
import type { Repository } from "../Repository";
import type { Runner } from "../Runner";
import type { DateTime } from "../types";
import type { User } from "../User";

// https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#job-events
export interface JobPayload extends Payload {
  object_kind: "build";
  ref: string;
  tag: boolean;
  before_sha: string;
  sha: string;
  retries_count: number;
  build_id: number;
  build_name: string;
  build_stage: string;
  build_status: string;
  build_created_at: DateTime;
  build_started_at: DateTime;
  build_finished_at: DateTime;
  build_duration: number;
  build_queued_duration: number;
  build_allow_failure: boolean;
  build_failure_reason: string;
  pipeline_id: number;
  runner: Runner;
  project_id: number;
  project_name: string;
  user: User;
  commit: Omit<Commit, "title" | "timestamp" | "author"> & {
    // The commit.id in the payload is the ID of the pipeline, not the ID of the commit.
    id: number;
    name: string | null;
    sha: string;
    author_name: string;
    author_email: string;
    author_url: string;
    status: string;
    duration: number | null;
    started_at: DateTime;
    finished_at: DateTime | null;
  };
  repository: Repository & {
    git_http_url: string;
    git_ssh_url: string;
    visibility_level: number;
  };
  environment: Omit<Environment, "deployment_tier"> | null;
}
