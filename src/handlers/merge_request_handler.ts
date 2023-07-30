import { BaseHandler } from "./base_handler";
import { Handler } from "./handler";
import { MergeRequestPayload } from "./types";

export class MergeRequestHandler extends BaseHandler implements Handler {
  public event_type = "merge_request";

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

    // Must be an opened mr whose status is updated
    // and branch is renovate branch
    // and rebase checkbox is checked.
    if (
      state !== "opened" ||
      action !== "update" ||
      !source_branch.startsWith("renovate/") ||
      !description.includes('[x] <!-- rebase-check -->')) {
      return;
    }

    this.logger.debug("Renovate bot wants rebase");
  }
}
