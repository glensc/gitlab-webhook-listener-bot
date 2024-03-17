import { Author } from "../Author";
import { DateTime } from "../types";

export interface ProjectPayload {
  event_name: string;
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
}
