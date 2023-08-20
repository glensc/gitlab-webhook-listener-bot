import { Label } from "./Label";

export interface IssueObjectAttributes {
  author_id: number;
  closed_at: string;
  confidential: boolean;
  created_at: string;
  description: string;
  discussion_locked: true | null;
  due_date: string | null;
  id: number;
  iid: number;
  last_edited_at: string;
  last_edited_by_id: number;
  milestone_id: number | null;
  moved_to_id: number | null;
  duplicated_to_id: number | null;
  project_id: number;
  relative_position: number;
  state_id: number;
  time_estimate: number;
  title: string;
  updated_at: string;
  updated_by_id: number;
  weight: number | null;
  url: string;
  total_time_spent: number;
  time_change: number;
  human_total_time_spent: string | null;
  human_time_change: string | null;
  human_time_estimate: string| null;
  assignee_ids: number[] | null;
  assignee_id: number;
  labels: Label[] | null;
  state: string;
  severity: string;
  action: string;
}
