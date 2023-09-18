import { BaseHandler, Event } from "../../src";

export class EventLogger extends BaseHandler {
  public async handle(event: Event): Promise<void> {
    const {
      headers: {
        "x-gitlab-event-uuid": event_uuid,
        "x-gitlab-event": event_title,
        "content-length": content_length,
      },
      payload: {
        event_type,
        object_kind,
        event_name,
        user_name,
        user_username,
      },
    } = event;

    const user = event.payload.user || {};

    this.logger.debug(`Received ${content_length} bytes: ${event_title}: ${event_type || object_kind || event_name} event ${event_uuid} by @${user_username || user.username} (${user_name || user.name})`);
  }

  public isValid(): boolean {
    return true;
  }
}
