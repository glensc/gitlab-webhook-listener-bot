import { Gitlab } from "@gitbeaker/rest";

type ProjectId = string | number;

export class GitlabClient {
  protected readonly api: InstanceType<typeof Gitlab<false>>;

  public constructor(
    host: string,
    token: string,
  ) {
    this.api = new Gitlab({
      host,
      token,
    });
  }
}
