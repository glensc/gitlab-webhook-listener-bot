import { LineRange } from "./LineRange";

export interface Position {
  base_sha: string | null;
  start_sha: string | null;
  head_sha: string | null;
  old_path: string | null;
  new_path: string | null;
  position_type: string;
  old_line: number | null;
  new_line: number | null;
  line_range: LineRange | null;
}
