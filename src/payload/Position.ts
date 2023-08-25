import { LineRange } from "./LineRange";

export interface Position {
  base_sha: string;
  start_sha: string;
  head_sha: string;
  old_path: string;
  new_path: string;
  position_type: string;
  old_line: number | null;
  new_line: number;
  line_range: LineRange;
}
