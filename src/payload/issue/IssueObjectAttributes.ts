import type { ObjectAttributes } from "../ObjectAttributes";
import type { DateTime } from "../types";

export interface IssueObjectAttributes extends ObjectAttributes {
  closed_at: DateTime | null;
  confidential: boolean;
  discussion_locked: boolean | null;
  due_date: string | null;
  moved_to_id: number | null;
  duplicated_to_id: number | null;
  project_id: number;
  relative_position: number | null;
  weight: number | null;
  severity: string;
  health_status: string | null;
  escalation_status?: string;
  escalation_policy?: null;
  customer_relations_contacts?: [];
}
