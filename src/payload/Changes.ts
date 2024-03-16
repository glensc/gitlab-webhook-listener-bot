import { Label } from "./Label";
import { DateTime } from "./types";
import { MergeStatus } from "./merge_request/types";

type PreviousAndCurrent<T> = {
  previous: T;
  current: T;
};

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
