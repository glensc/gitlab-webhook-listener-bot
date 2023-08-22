export interface Runner {
  id: number;
  description: string;
  runner_type: string;
  active: boolean;
  is_shared: boolean;
  tags: string[] | null;
}
