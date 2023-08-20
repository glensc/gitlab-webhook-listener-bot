export interface Label {
  id: number;
  title: string;
  color: string;
  project_id: number | null,
  created_at: string;
  updated_at: string;
  template: boolean;
  description: string | null;
  type: "GroupLabel" | "ProjectLabel",
  group_id: number | null,
}
