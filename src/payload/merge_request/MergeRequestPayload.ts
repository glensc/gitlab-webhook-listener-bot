import type { MergeRequestObjectAttributes } from "./MergeRequestObjectAttributes";
import type { Changes } from "../Changes";
import type { Label } from "../Label";
import type { Payload } from "../Payload";
import type { Project } from "../Project";
import type { Repository } from "../Repository";
import type { User } from "../User";

export interface MergeRequestPayload extends Payload {
  object_kind: "merge_request";
  event_type: "merge_request";
  user: User;
  project: Project;
  object_attributes: MergeRequestObjectAttributes;
  labels: Label[] | null;
  changes: Changes;
  repository: Repository;
  assignees?: User[];
  reviewers?: User[];
}
