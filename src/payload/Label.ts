import { DateTime } from "./types";

export interface Label {
  id: number;
  title: string;
  color: string;
  project_id: number | null,
  created_at: DateTime;
  updated_at: DateTime;
  template: boolean;
  description: string | null;
  type: "GroupLabel" | "ProjectLabel",
  group_id: number | null,
  lock_on_merge?: boolean,
}
