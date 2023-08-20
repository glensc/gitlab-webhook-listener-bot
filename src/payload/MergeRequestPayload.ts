import { Changes } from "./Changes";
import { Label } from "./Label";
import { MergeRequestObjectAttributes } from "./MergeRequestObjectAttributes";
import { Project } from "./Project";
import { Repository } from "./Repository";
import { User } from "./User";

export interface MergeRequestPayload {
  object_kind: string;
  event_type: string;
  user: User;
  project: Project;
  object_attributes: MergeRequestObjectAttributes;
  labels: Label[] | null;
  changes: Changes;
  repository: Repository;
  assignees: User[] | null;
  reviewers: User[] | null;
}
