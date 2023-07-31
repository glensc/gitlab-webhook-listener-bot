import { MergeRequestHandler, MergeRequestPayload } from "../../src";

export class RenovateRebase extends MergeRequestHandler {
  public async handle({
                        object_attributes: {
                          source_branch,
                          action,
                          state,
                        },
                        changes: {
                          description: {
                            current: description
                          },
                        },
                      }: MergeRequestPayload): Promise<void> {

    this.logger.debug("Check renovate rebase");

    // Must be an opened mr whose status is updated
    // and branch is renovate branch
    // and rebase checkbox is checked.
    if (
      state !== "opened" ||
      action !== "update" ||
      !source_branch.startsWith("renovate/") ||
      !description.includes("[x] <!-- rebase-check -->")) {

      this.logger.debug("Will not do renovate bot rebase");
      return;
    }

    this.logger.debug("Renovate bot wants rebase");
  }
}
