import { Gitlab } from "@gitbeaker/rest";

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
