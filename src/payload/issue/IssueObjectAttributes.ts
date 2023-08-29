import { ObjectAttributes } from "../ObjectAttributes";
import { DateTime } from "../types";

export interface IssueObjectAttributes extends ObjectAttributes {
  closed_at: DateTime;
  confidential: boolean;
  discussion_locked: true | null;
  due_date: string | null;
  moved_to_id: number | null;
  duplicated_to_id: number | null;
  project_id: number;
  relative_position: number;
  weight: number | null;
  severity: string;
}