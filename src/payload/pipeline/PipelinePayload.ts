import type { Builds } from "./Builds";
import type { PipelineObjectAttributes } from "./PipelineObjectAttributes";
import type { Commit } from "../Commit";
import type { Payload } from "../Payload";
import type { Project } from "../Project";
import type { User } from "../User";

// https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#pipeline-events
export interface PipelinePayload extends Payload {
  object_kind: "pipeline";
  object_attributes: PipelineObjectAttributes;
  merge_request: null;
  user: User;
  project: Omit<Project, "homepage" | "url" | "ssh_url" | "http_url">;
  commit: Commit;
  builds: Builds[] | null;
  source_pipeline?: {
    project: Pick<Project, "id" | "web_url" | "path_with_namespace">,
    job_id: number;
    pipeline_id: number;
  }
}
