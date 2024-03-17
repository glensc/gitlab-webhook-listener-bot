import {
  MergeRequestHandler,
} from "gitlab-webhook-listener-bot";

import type {
  GitlabClient,
  WebhookEvent,
  MergeRequestPayload,
  LoggerInterface,
} from "gitlab-webhook-listener-bot";

/**
 * Event handler that deletes source branch when merge request is closed.
 */
export class MergeRequestClose extends MergeRequestHandler {
  public constructor(
    private readonly gitlab: GitlabClient,
    logger: LoggerInterface,
  ) {
    super(logger);
  }

  /**
   * Check if this is a close event
   */
  public isValid({ payload }: WebhookEvent<MergeRequestPayload>): boolean {
    const {
      object_attributes: {
        action,
        state,
      },
    } = payload;

    return action === "close" && state === "closed";
  }

  public async handle({ payload }: WebhookEvent<MergeRequestPayload>): Promise<void> {
    const {
      object_attributes: {
        source_branch,
      },
      project: {
        id: projectId,
      },
    } = payload;

    if (!await this.gitlab.hasBranch(projectId, source_branch)) {
      return;
    }

    this.logger.info(`Deleting source branch: ${source_branch}`);
    await this.gitlab.deleteBranch(projectId, source_branch);
  }
}
