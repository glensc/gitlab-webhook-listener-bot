import { Label } from "./Label";

export interface IssueObjectAttributes {
  author_id: number;
  closed_at?: null;
  confidential: boolean;
  created_at: string;
  description: string;
  discussion_locked?: null;
  due_date?: null;
  id: number;
  iid: number;
  last_edited_at: string;
  last_edited_by_id: number;
  milestone_id?: null;
  moved_to_id?: null;
  duplicated_to_id?: null;
  project_id: number;
  relative_position: number;
  state_id: number;
  time_estimate: number;
  title: string;
  updated_at: string;
  updated_by_id: number;
  weight?: null;
  url: string;
  total_time_spent: number;
  time_change: number;
  human_total_time_spent?: null;
  human_time_change?: null;
  human_time_estimate?: null;
  assignee_ids: number[] | null;
  assignee_id: number;
  labels?: Label[] | null;
  state: string;
  severity: string;
  action: string;
}
