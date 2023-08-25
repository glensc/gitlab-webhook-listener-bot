import { ArtifactsFile } from "./ArtifactsFile";
import { DateTime } from "../types";
import { Environment } from "../Environment";
import { Runner } from "../Runner";
import { User } from "../User";

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
