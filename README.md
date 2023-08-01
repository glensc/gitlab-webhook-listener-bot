# Gitlab WebHook Listener Bot

This project will listen for GitLab webhook events,
and do actions based on context.

- https://docs.gitlab.com/ee/user/project/integrations/webhooks.html
- https://docs.gitlab.com/ee/user/project/integrations/webhook_events.html

The project acts as a building block for you to create your own handlers.

## Example

This will execute code to re-run renovate bot if the `[x]` check is checked.

```ts
import { main, logger, MergeRequestHandler } from "gitlab-webhook-listener-bot";

class RenovateRebase extends MergeRequestHandler {
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

main({
  logger,
  handlers: [
    new RenovateRebase(logger),
  ],
});
```

## Similar projects

- https://github.com/kolomiichenko/gitlab-webhooker - write callbacks as handlers. unmaintained.
- https://github.com/nanoy42/gitlab-webhook-telegram - sends events to telegram.
- https://github.com/glensc/gitlab-registry-cleanup-hook - deletes related docker images on merge
