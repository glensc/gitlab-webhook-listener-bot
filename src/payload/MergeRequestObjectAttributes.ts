import { Project } from "./Project";
import { Author } from "./Author";
import { ObjectAttributes } from "./ObjectAttributes";
import { DateTime } from "./types";

export interface MergeRequestObjectAttributes extends ObjectAttributes {
  head_pipeline_id: number | null;
  merge_commit_sha: string | null;
  merge_error: string | null;
  merge_params: {
    force_remove_source_branch: "1" | true;
  };
  merge_status: string;
  merge_user_id: string | null;
  merge_when_pipeline_succeeds: boolean;
  source_branch: string;
  source_project_id: number;
  target_branch: string;
  target_project_id: number;
  source: Project;
  target: Project;
  last_commit: {
    id: string;
    message: string;
    title: string;
    timestamp: DateTime;
    url: string;
    author: Author;
  };
  work_in_progress: boolean;
  reviewer_ids: number[] | null;
  blocking_discussions_resolved: boolean;
  first_contribution: boolean;
  detailed_merge_status: string;
}
