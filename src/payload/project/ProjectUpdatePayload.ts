import { ProjectPayload } from "./ProjectPayload";

export interface ProjectUpdatePayload extends ProjectPayload {
  event_name: "project_update";
}
