import { DateTime } from "./types";
import { Label } from "./Label";
import { MergeParams, MergeStatus } from "./merge_request/types";
import { User } from "./User";

type PreviousAndCurrent<T> = {
  previous: T;
  current: T;
};

export interface Changes {
  assignees?: PreviousAndCurrent<User[]>;
  closed_at?: PreviousAndCurrent<DateTime>;
  description?: PreviousAndCurrent<string>;
  draft?: PreviousAndCurrent<boolean>;
  labels?: PreviousAndCurrent<Label[]>;
  last_edited_at?: PreviousAndCurrent<DateTime | null>;
  last_edited_by_id?: PreviousAndCurrent<number | null>;
  merge_error?: PreviousAndCurrent<string>;
  merge_params?: PreviousAndCurrent<MergeParams>;
  merge_status?: PreviousAndCurrent<MergeStatus>;
  merge_user_id?: PreviousAndCurrent<number | null>;
  merge_when_pipeline_succeeds?: PreviousAndCurrent<boolean>;
  reviewers?: PreviousAndCurrent<User[]>;
  severity?: PreviousAndCurrent<string>;
  state_id?: PreviousAndCurrent<number>;
  target_branch?: PreviousAndCurrent<string>;
  time_estimate?: PreviousAndCurrent<number>;
  title?: PreviousAndCurrent<string>;
  updated_at?: PreviousAndCurrent<DateTime>;
  updated_by_id?: PreviousAndCurrent<number | null>;
}
