import { Project } from "../Project";
import { ObjectAttributes } from "../ObjectAttributes";
import { Commit } from "../Commit";
import { MergeStatus } from "./types";

export interface MergeRequestObjectAttributes extends ObjectAttributes {
  draft: boolean;
  head_pipeline_id: number | null;
  merge_commit_sha: string | null;
  merge_error: string | null;
  merge_params: {
    force_remove_source_branch: "0" | "1" | true;
    auto_merge_strategy?: string;
    should_remove_source_branch?: boolean;
    commit_message?: string;
    squash_commit_message?: string;
    sha?: string;
  };
  merge_status: MergeStatus;
  merge_user_id: string | null;
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
