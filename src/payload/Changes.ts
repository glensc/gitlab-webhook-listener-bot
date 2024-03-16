import { Label } from "./Label";
import { DateTime } from "./types";

type PreviousAndCurrent<T> = {
  previous: T;
  current: T;
};

// https://gitlab.com/gitlab-org/gitlab/-/blob/171e6985759885fd7acbe28972fc97f5c9c81c46/spec/graphql/types/merge_request_type_spec.rb#L125
export type MergeStatus =
  | "can_be_merged"
  | "cannot_be_merged"
  | "cannot_be_merged_recheck"
  | "cannot_be_merged_rechecking"
  | "checking"
  | "preparing"
  | "unchecked";

export interface Changes {
  closed_at?: PreviousAndCurrent<DateTime>;
  description?: PreviousAndCurrent<string>;
  labels?: PreviousAndCurrent<Label[]>;
  last_edited_at?: PreviousAndCurrent<DateTime>;
  last_edited_by_id?: PreviousAndCurrent<number>;
  merge_status?: PreviousAndCurrent<MergeStatus>;
  severity?: PreviousAndCurrent<string>;
  state_id?: PreviousAndCurrent<number>;
  target_branch?: PreviousAndCurrent<string>;
  title?: PreviousAndCurrent<string>;
  updated_at?: PreviousAndCurrent<DateTime>;
  updated_by_id?: PreviousAndCurrent<number>;
}
