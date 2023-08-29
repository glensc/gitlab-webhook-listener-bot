import { BaseHandler, Event } from "../../src";

export class EventLogger extends BaseHandler {
  public async handle(event: Event): Promise<void> {
    const {
      headers: {
        "x-gitlab-event-uuid": event_uuid,
        "content-length": content_length,
      },
      payload: {
        event_type,
        object_kind,
        user,
      },
    } = event;

    const {
      name: user_name,
      username: user_handle,
    } = user || {};

    this.logger.debug(`Received ${content_length} bytes: ${event_type || object_kind} event ${event_uuid} by @${user_handle} (${user_name})`);
  }

  public isValid(): boolean {
    return true;
  }
}
