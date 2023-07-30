import { BaseHandler } from "./base_handler";
import { Handler } from "./handler";
import { MergeRequestPayload } from "./types";

export class MergeRequestHandler extends BaseHandler implements Handler {
  public event_type = "merge_request";

  public async handle(payload: MergeRequestPayload): Promise<void> {
  }
}
