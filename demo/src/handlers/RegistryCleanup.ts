import {
  MergeRequestHandler,
  slugify,
} from "gitlab-webhook-listener-bot";

import type {
  GitlabClient,
  LoggerInterface,
  MergeRequestPayload,
  WebhookEvent,
} from "gitlab-webhook-listener-bot";

/**
 * Delete docker build images when merge request is closed or merged.
 */
export class RegistryCleanup extends MergeRequestHandler {
  public constructor(
    private readonly gitlab: GitlabClient,
    logger: LoggerInterface,
  ) {
    super(logger);
  }

  public isValid({ payload }: WebhookEvent<MergeRequestPayload>): boolean {
    const {
      object_attributes: {
        action,
      },
    } = payload;

    return (
      ["close", "merge"].includes(action || "")
    );
  }

  public async handle({ payload }: WebhookEvent<MergeRequestPayload>): Promise<void> {
    const {
      object_attributes: {
        iid: mr_id,
        title,
        action,
        source_branch,
      },
      project: {
        id: project_id,
        path_with_namespace: project_path,
      },
    } = payload;

    this.logger.info(`Deleting docker images related to the merge request ${source_branch} (action: ${action}): ${project_path}!${mr_id}: ${title}`);

    await this.cleanupAutoDevopsImages(project_id, slugify(source_branch));
  }

  /**
   * Delete auto-devops images
   */
  private async cleanupAutoDevopsImages(project_id: number, source_branch: string): Promise<void> {
    const repository = await this.gitlab.getRegistryRepositoryByName(project_id, source_branch);

    this.logger.debug(`Found auto-devops repository: ${JSON.stringify(repository)}`);

    if (!repository) {
      return;
    }

    this.logger.info("Deleting repository", repository);
    await this.gitlab.removeRegistryRepositoryById(project_id, repository.id);
  }
}
