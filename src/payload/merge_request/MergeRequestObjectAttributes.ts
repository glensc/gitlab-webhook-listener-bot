import type { MergeParams, MergeStatus } from "./types";
import type { Commit } from "../Commit";
import type { ObjectAttributes } from "../ObjectAttributes";
import type { Project } from "../Project";

export interface MergeRequestObjectAttributes extends ObjectAttributes {
  draft: boolean;
  head_pipeline_id: number | null;
  merge_commit_sha: string | null;
  merge_error: string | null;
  merge_params: MergeParams;
  merge_status: MergeStatus;
  merge_user_id: number | null;
  merge_when_pipeline_succeeds: boolean;
  source_branch: string;
  source_project_id: number;
  target_branch: string;
  target_project_id: number;
  source: Project;
  target: Project;
  last_commit: Commit;
  work_in_progress: boolean;
  reviewer_ids: number[] | null;
  blocking_discussions_resolved: boolean;
  first_contribution: boolean;
  detailed_merge_status: string;
  oldrev?: string;
}
