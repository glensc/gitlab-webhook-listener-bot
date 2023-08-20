import { Changes } from "./Changes";
import { IssueObjectAttributes } from "./IssueObjectAttributes";
import { Label } from "./Label";
import { Project } from "./Project";
import { Repository } from "./Repository";
import { User } from "./User";

export interface IssuePayload {
  object_kind: string;
  event_type: string;
  user: User;
  project: Project;
  object_attributes: IssueObjectAttributes;
  labels: Label[] | null;
  changes: Changes;
  repository: Repository;
  assignees?: User[] | null;
}
