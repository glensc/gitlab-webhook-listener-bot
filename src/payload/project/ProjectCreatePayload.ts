import { ProjectPayload } from "./ProjectPayload";

export interface ProjectCreatePayload extends ProjectPayload {
  event_name: "project_create";
}
