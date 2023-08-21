import { BaseHandler, Event, Handler } from "../../src";
import { EVENT_TYPES } from "../../src/types";

export class EventLogger extends BaseHandler implements Handler {
  public event_types = [EVENT_TYPES.ANY];
  public async handle(event: Event): Promise<void> {
    const {
      headers: {
        "x-gitlab-event-uuid": event_uuid,
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

    this.logger.debug(`Received ${event_type || object_kind} event ${event_uuid} by @${user_handle} (${user_name})`);
  }

  public isValid(): boolean {
    return true;
  }
}
