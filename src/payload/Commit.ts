import { Author } from "./Author";
import { DateTime } from "./types";

export interface Commit {
  id: string;
  message: string;
  title: string;
  timestamp: DateTime;
  url: string;
  author: Author;
}
