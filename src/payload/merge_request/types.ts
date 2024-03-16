// https://gitlab.com/gitlab-org/gitlab/-/blob/171e6985759885fd7acbe28972fc97f5c9c81c46/spec/graphql/types/merge_request_type_spec.rb#L125
export type MergeStatus =
  | "can_be_merged"
  | "cannot_be_merged"
  | "cannot_be_merged_recheck"
  | "cannot_be_merged_rechecking"
  | "checking"
  | "preparing"
  | "unchecked";

export type MergeParams = {
  force_remove_source_branch: "0" | "1" | true;
  auto_merge_strategy?: string;
  should_remove_source_branch?: boolean;
  commit_message?: string;
  squash_commit_message?: string;
  sha?: string;
};
