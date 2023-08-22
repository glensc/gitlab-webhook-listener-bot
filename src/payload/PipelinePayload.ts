import { Builds } from "./Builds";
import { Commit } from "./Commit";
import { PipelineObjectAttributes } from "./PipelineObjectAttributes";
import { Project } from "./Project";
import { User } from "./User";

// https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#pipeline-events
export interface PipelinePayload {
  object_kind: string;
  object_attributes: PipelineObjectAttributes;
  // TODO merge_request
  merge_request: any | null;
  user: User;
  project: Omit<Project, "homepage" | "url" | "ssh_url" | "http_url">;
  commit: Commit;
  builds: Builds[] | null;
}