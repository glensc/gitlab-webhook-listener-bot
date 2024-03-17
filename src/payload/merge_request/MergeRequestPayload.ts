import { Changes } from "../Changes";
import { Label } from "../Label";
import { Payload } from "../Payload";
import { Project } from "../Project";
import { Repository } from "../Repository";
import { User } from "../User";

import { MergeRequestObjectAttributes } from "./MergeRequestObjectAttributes";

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
