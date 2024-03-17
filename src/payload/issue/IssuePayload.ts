import { Changes } from "../Changes";
import { Label } from "../Label";
import { Payload } from "../Payload";
import { Project } from "../Project";
import { Repository } from "../Repository";
import { User } from "../User";

import { IssueObjectAttributes } from "./IssueObjectAttributes";

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
