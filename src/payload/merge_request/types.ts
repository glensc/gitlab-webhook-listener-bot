// https://gitlab.com/gitlab-org/gitlab/-/blob/171e6985759885fd7acbe28972fc97f5c9c81c46/spec/graphql/types/merge_request_type_spec.rb#L125
export type MergeStatus =
  | "can_be_merged"
  | "cannot_be_merged"
  | "cannot_be_merged_recheck"
  | "cannot_be_merged_rechecking"
  | "checking"
  | "preparing"
  | "unchecked";
