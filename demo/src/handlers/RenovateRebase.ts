import { MergeRequestHandler } from "gitlab-webhook-listener-bot";

import type { WebhookEvent, MergeRequestPayload } from "gitlab-webhook-listener-bot";

export class RenovateRebase extends MergeRequestHandler {
  /**
   * Must be an opened mr whose status is updated
   * and branch is renovate branch
   * and rebase checkbox is checked.
   */
  public isValid({ payload }: WebhookEvent<MergeRequestPayload>): boolean {
    const {
      object_attributes: {
        source_branch,
        action,
        state,
      },
      changes: {
        description,
      },
    } = payload;

    return (
      state === "opened" &&
      action === "update" &&
      source_branch.startsWith("renovate/") &&
      (description?.current || "").includes("[x] <!-- rebase-check -->")
    );
  }

  public async handle({ payload }: WebhookEvent<MergeRequestPayload>): Promise<void> {
    const {
      object_attributes: {
        url,
      },
    } = payload;

    this.logger.debug(`Renovate rebase request triggered from ${url}`);
    // TODO: create pipeline
    // code here to do the actual action
  }
}
