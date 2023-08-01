import { MergeRequestHandler, MergeRequestPayload } from "../../src";

export class RenovateRebase extends MergeRequestHandler {
  public async handle(payload: MergeRequestPayload): Promise<void> {
    if (!this.isValid(payload)) {
      return;
    }

    this.logger.debug("Renovate bot wants rebase");
    // TODO: create pipeline
    // code here to do the actual action
  }

  /**
   * Must be an opened mr whose status is updated
   * and branch is renovate branch
   * and rebase checkbox is checked.
   */
  private isValid(payload: MergeRequestPayload): boolean {
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
}
