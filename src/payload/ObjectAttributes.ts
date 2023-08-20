import { Label } from "./Label";

export interface ObjectAttributes {
  id: number;
  iid: number;
  state: string;
  state_id: number;
  action: string;
  created_at: string;
  author_id: number;
  assignee_id: number;
  last_edited_at: string | null;
  last_edited_by_id: number | null;
  updated_at: string;
  updated_by_id: number | null;
  title: string;
  description: string;
  url: string;
  labels: Label[] | null;
  milestone_id: number | null;
  assignee_ids: number[] | null;

  // https://gitlab.com/gitlab-org/gitlab/-/blob/v16.2.4-ee/app/serializers/time_trackable_entity.rb
  // https://gitlab.com/gitlab-org/gitlab/-/blob/v16.2.4-ee/app/models/concerns/time_trackable.rb
  time_estimate: number;
  total_time_spent: number;
  human_time_estimate: string | null;
  human_total_time_spent: string | null;
  time_change: number;
  human_time_change: string | null;
}
