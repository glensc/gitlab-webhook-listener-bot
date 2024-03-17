import type { Author } from "./Author";
import type { DateTime } from "./types";

export interface Commit {
  id: string;
  message: string;
  title: string;
  timestamp: DateTime;
  url: string;
  author: Author;
}
