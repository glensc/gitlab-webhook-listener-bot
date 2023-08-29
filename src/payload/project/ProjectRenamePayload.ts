import { Author } from "../Author";
import { DateTime } from "../types";

export interface ProjectRenamePayload {
  event_name: "project_rename";
  created_at: DateTime;
  updated_at: DateTime;
  name: string;
  path: string;
  path_with_namespace: string;
  project_id: number;
  owner_name: string;
  owner_email: string;
  owners: Author[] | null;
  project_visibility: string;
  old_path_with_namespace: string;
}
