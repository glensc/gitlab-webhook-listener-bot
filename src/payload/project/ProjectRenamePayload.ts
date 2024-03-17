import type { ProjectPayload } from "./ProjectPayload";

export interface ProjectRenamePayload extends ProjectPayload {
  event_name: "project_rename";
  old_path_with_namespace: string;
}
