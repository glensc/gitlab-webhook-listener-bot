type PreviousCurrentRecord = {
  previous: string;
  current: string;
};

type UserRecord = {
  id: number,
  name: string,
  username: string,
  avatar_url: string,
  email: string,
};

interface ObjectAttributes extends Record<string, object | string | boolean> {
  source_branch: string;
  action: string;
  state: string;
}

export interface Payload extends Record<string, object | string> {
  object_kind: string;
  event_type: string;
  user: UserRecord;
  project: Record<string, string>;
  object_attributes: ObjectAttributes;
  labels: Record<string, number | string | null>;
  changes: {
    description: PreviousCurrentRecord;
    last_edited_at: PreviousCurrentRecord;
    updated_at: PreviousCurrentRecord;
  };
  repository: Record<string, string>;
  assignees: UserRecord[];
  reviewers: UserRecord[];
}

export interface MergeRequestPayload extends Payload {
  object_kind: "merge_request";
  event_type: "merge_request";
}
