import { Project } from "./Project";
import { Label } from "./Label";
import { Author } from "./Author";

export interface MergeRequestObjectAttributes {
  assignee_id: number;
  author_id: number;
  created_at: string;
  description: string;
  head_pipeline_id: number | null;
  id: number;
  iid: number;
  last_edited_at: string | null;
  last_edited_by_id: number | null;
  merge_commit_sha: string | null;
  merge_error: string | null;
  merge_params: {
    force_remove_source_branch: "1" | true;
  };
  merge_status: string;
  merge_user_id: string | null;
  merge_when_pipeline_succeeds: boolean;
  milestone_id: string| null;
  source_branch: string;
  source_project_id: number;
  state_id: number;
  target_branch: string;
  target_project_id: number;
  time_estimate: number;
  title: string;
  updated_at: string;
  updated_by_id: number | null;
  url: string;
  source: Project;
  target: Project;
  last_commit: {
    id: string;
    message: string;
    title: string;
    timestamp: string;
    url: string;
    author: Author;
  };
  work_in_progress: boolean;
  total_time_spent: number;
  time_change: number;
  human_total_time_spent: string | null;
  human_time_change: string | null;
  human_time_estimate: string | null;
  assignee_ids: number[] | null;
  reviewer_ids: number[] | null;
  labels: Label[] | null;
  state: string;
  blocking_discussions_resolved: boolean;
  first_contribution: boolean;
  detailed_merge_status: string;
  action: string;
}
