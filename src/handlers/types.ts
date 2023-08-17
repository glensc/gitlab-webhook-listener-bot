type PreviousCurrentRecord<T> = {
  previous: T;
  current: T;
};

type Label = {
  id: number,
  title: string,
  color: string,
  project_id: number | null,
  created_at: string,
  updated_at: string,
  template: boolean,
  description: string,
  type: "GroupLabel" | "ProjectLabel",
  group_id: number | null,
};

interface Project extends Record<string, string> {
  path_with_namespace: string,
}

type User = {
  id: number,
  name: string,
  username: string,
  avatar_url: string,
  email: string,
};

interface ObjectAttributes extends Record<string, object | string | number | boolean | null> {
  source_branch: string;
  action: string;
  state: string;
  last_commit: Record<string, object | string | boolean>;
  iid: number;
  title: string;
  url: string;
  merge_status: string;
  head_pipeline_id: number | null;
}

type MergeStatus = "unchecked" | "preparing" | "can_be_merged";

export interface Payload extends Record<string, object | string> {
  object_kind: string;
  event_type: string;
  user: User;
  project: Project;
  object_attributes: ObjectAttributes;
  labels: Label[],
  changes: {
    description?: PreviousCurrentRecord<string>;
    last_edited_at?: PreviousCurrentRecord<string>;
    updated_at?: PreviousCurrentRecord<string>;
    labels?: PreviousCurrentRecord<Label[]>;
    merge_status?: PreviousCurrentRecord<MergeStatus | string>;
    title?: PreviousCurrentRecord<string>;
    state_id?: PreviousCurrentRecord<number>;
    updated_by_id?: PreviousCurrentRecord<number>;
  };
  repository: Record<string, string>;
  assignees: User[];
  reviewers: User[];
}

export interface MergeRequestPayload extends Payload {
  object_kind: "merge_request";
  event_type: "merge_request";
  target_branch: string;
  target: {
    default_branch: string;
  },
}

export interface IssuePayload extends Payload {
  object_kind: "issue";
  event_type: "issue";
}
