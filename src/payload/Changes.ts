import { Label } from "./Label";

type PreviousAndCurrent<T> = {
  previous: T;
  current: T;
};

export interface Changes {
  description?: PreviousAndCurrent<string>;
  labels?: PreviousAndCurrent<Label[]>;
  last_edited_at?: PreviousAndCurrent<string>;
  last_edited_by_id?: PreviousAndCurrent<number>;
  merge_status?: PreviousAndCurrent<string>;
  state_id?: PreviousAndCurrent<number>;
  target_branch?: PreviousAndCurrent<string>;
  title?: PreviousAndCurrent<string>;
  updated_at?: PreviousAndCurrent<string>;
  updated_by_id?: PreviousAndCurrent<number>;
}
