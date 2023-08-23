import { DateTime } from "./types";

export interface NoteObjectAttributes {
  attachment?: null;
  author_id: number;
  change_position?: null;
  commit_id?: null;
  created_at: string;
  discussion_id: string;
  id: number;
  line_code: string | null;
  note: string;
  noteable_id: number;
  noteable_type: "MergeRequest" | "Commit" | "Issue" | "Snippet";
  original_position?: null;
  position?: null;
  project_id: number;
  resolved_at: DateTime | null;
  resolved_by_id?: null;
  resolved_by_push?: null;
  st_diff?: null;
  system: boolean;
  type?: null;
  updated_at: DateTime;
  updated_by_id?: null;
  description: string;
  url: string;
}
