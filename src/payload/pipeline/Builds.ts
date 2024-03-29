import type { ArtifactsFile } from "./ArtifactsFile";
import type { Environment } from "../Environment";
import type { Runner } from "../Runner";
import type { DateTime } from "../types";
import type { User } from "../User";

export interface Builds {
  id: number;
  stage: string;
  name: string;
  status: string;
  created_at: DateTime;
  started_at: DateTime | null;
  finished_at: DateTime | null;
  duration: number | null;
  queued_duration: number | null;
  failure_reason: string | null;
  when: string;
  manual: boolean;
  allow_failure: boolean;
  user: User;
  runner: Runner | null;
  artifacts_file: ArtifactsFile;
  environment: Environment | null;
}
