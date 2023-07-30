# Gitlab WebHook Listener Bot

This project will listen for GitLab webhook events,
and do actions based on context.

- https://docs.gitlab.com/ee/user/project/integrations/webhooks.html
- https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html


## Example

This will execute code to re-run renovate bot if the `[x]` check is checked.

```ts
import { main, logger, MergeRequestHandler } from "gitlab-webhook-listener-bot";

class RenovateRebase extends MergeRequestHandler {
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
      !description.includes('[x] <!-- rebase-check -->')) {

      this.logger.debug("Will not do renovate bot rebase");
      return;
    }

    this.logger.debug("Renovate bot wants rebase");
    // TODO: write code
  }
}

main({
  logger,
  handlers: [
    new RenovateRebase(logger),
  ],
});
```
