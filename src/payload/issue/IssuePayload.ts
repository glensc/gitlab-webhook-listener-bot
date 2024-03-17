import type { IssueObjectAttributes } from "./IssueObjectAttributes";
import type { Changes } from "../Changes";
import type { Label } from "../Label";
import type { Payload } from "../Payload";
import type { Project } from "../Project";
import type { Repository } from "../Repository";
import type { User } from "../User";

export interface IssuePayload extends Payload {
  object_kind: "issue";
  event_type: "issue";
  user: User;
  project: Project;
  object_attributes: IssueObjectAttributes;
  labels: Label[] | null;
  changes: Changes;
  repository: Repository;
  assignees?: User[];
}
