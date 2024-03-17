import { Gitlab } from "@gitbeaker/rest";
import { ProjectId } from "./types";

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

  public async hasBranch(projectId: ProjectId, branchName: string) {
    try {
      return !!await this.api.Branches.show(projectId, branchName);
    } catch (e: any) {
      if (e.cause.description === "404 Branch Not Found") {
        return false;
      }

      // Unknown error
      throw e;
    }
  }

  public async deleteBranch(projectId: ProjectId, branchName: string) {
    return this.api.Branches.remove(projectId, branchName);
  }

  public async getRegistryRepositoryByName(projectId: ProjectId, name: string) {
    // NOTE: There doesn't appear to be a method that would not involve fetching all repositories
    let repositories;

    try {
      repositories = await this.api.ContainerRegistry.allRepositories({ projectId });
    } catch (e: any) {
      // forbidden in case feature not enabled
      if (e.cause.description === "403 Forbidden") {
        return null;
      }

      throw e;
    }

    return repositories.filter(repository => repository.name === name)[0];
  }

  public async removeRegistryRepositoryById(projectId: ProjectId, repositoryId: number) {
    const code = await this.api.ContainerRegistry.removeRepository(projectId, repositoryId);

    if ((code as any as number) !== 202) {
      throw new Error(`Unexpected code: ${code}`);
    }
  }
}
