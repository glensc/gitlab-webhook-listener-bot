import type { NoteObjectAttributes } from "./NoteObjectAttributes";
import type { Commit } from "../Commit";
import type { IssueObjectAttributes } from "../issue/IssueObjectAttributes";
import type { MergeRequestObjectAttributes } from "../merge_request/MergeRequestObjectAttributes";
import type { Payload } from "../Payload";
import type { Project } from "../Project";
import type { Repository } from "../Repository";
import type { User } from "../User";

// https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html#comment-events
export interface NotePayload extends Payload {
  object_kind: "note";
  event_type: "note";
  user: User;
  project_id: number;
  project: Project;
  object_attributes: NoteObjectAttributes;
  repository: Repository;

  // Optional types by relation
  merge_request?: Omit<MergeRequestObjectAttributes, "action">;
  issue?: Omit<IssueObjectAttributes, "action"> & {
    health_status: string | null;
  };
  commit?: Commit;
  //  TODO:
  // snippet
}
