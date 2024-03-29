import type { Label } from "./Label";
import type { MergeParams, MergeStatus } from "./merge_request/types";
import type { DateTime } from "./types";
import type { User } from "./User";

type PreviousAndCurrent<T> = {
  previous: T;
  current: T;
};

export interface Changes {
  assignees?: PreviousAndCurrent<User[]>;
  author_id?: PreviousAndCurrent<number | null>;
  closed_at?: PreviousAndCurrent<DateTime | null>;
  confidential?: PreviousAndCurrent<boolean>;
  created_at?: PreviousAndCurrent<string | null>;
  description?: PreviousAndCurrent<string | null>;
  draft?: PreviousAndCurrent<boolean>;
  due_date?: PreviousAndCurrent<string | null>;
  escalation_status?: PreviousAndCurrent<string>;
  id?: PreviousAndCurrent<number | null>;
  iid?: PreviousAndCurrent<number | null>;
  labels?: PreviousAndCurrent<Label[]>;
  last_edited_at?: PreviousAndCurrent<DateTime | null>;
  last_edited_by_id?: PreviousAndCurrent<number | null>;
  merge_commit_sha?: PreviousAndCurrent<string | null>;
  merge_error?: PreviousAndCurrent<string | null>;
  merge_params?: PreviousAndCurrent<MergeParams>;
  merge_status?: PreviousAndCurrent<MergeStatus>;
  merge_user_id?: PreviousAndCurrent<number | null>;
  merge_when_pipeline_succeeds?: PreviousAndCurrent<boolean>;
  milestone_id?: PreviousAndCurrent<number | null>;
  project_id?: PreviousAndCurrent<number | null>;
  relative_position?: PreviousAndCurrent<number | null>;
  reviewers?: PreviousAndCurrent<User[]>;
  severity?: PreviousAndCurrent<string>;
  state_id?: PreviousAndCurrent<number>;
  target_branch?: PreviousAndCurrent<string>;
  time_change?: PreviousAndCurrent<number>;
  time_estimate?: PreviousAndCurrent<number | null>;
  title?: PreviousAndCurrent<string | null>;
  total_time_spent?: PreviousAndCurrent<number>;
  updated_at?: PreviousAndCurrent<DateTime | null>;
  updated_by_id?: PreviousAndCurrent<number | null>;
  weight?: PreviousAndCurrent<number | null>;
}
