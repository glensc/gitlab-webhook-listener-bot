import { BaseHandler, WebhookEvent, EVENT_TYPES, ProjectCreatePayload } from "../../src";

export class ProjectCreateEvent extends BaseHandler {
  public event_types = [EVENT_TYPES.PROJECT_CREATE];

  public async handle({ payload }: WebhookEvent<ProjectCreatePayload>): Promise<void> {
    const {
      path_with_namespace,
    } = payload;
    this.logger.debug(`Project "${path_with_namespace}" created`);
  }

  public isValid(): boolean {
    return true;
  }
}
