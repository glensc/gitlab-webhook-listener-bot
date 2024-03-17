import { Commit } from "../Commit";
import { IssueObjectAttributes } from "../issue/IssueObjectAttributes";
import { MergeRequestObjectAttributes } from "../merge_request/MergeRequestObjectAttributes";
import { Payload } from "../Payload";
import { Project } from "../Project";
import { Repository } from "../Repository";
import { User } from "../User";

import { NoteObjectAttributes } from "./NoteObjectAttributes";

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
