import type { Variables } from "./Variables";
import type { DateTime } from "../types";

export interface PipelineObjectAttributes {
  id: number;
  iid: number;
  name: string | null;
  ref: string;
  tag: boolean;
  sha: string;
  before_sha: string;
  source: string;
  status: string;
  detailed_status: string;
  stages: string[] | null;
  created_at: DateTime;
  finished_at: DateTime | null;
  duration: number | null;
  queued_duration: number | null;
  variables: Variables[] | null;
  url: string;
}
