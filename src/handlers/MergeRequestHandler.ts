import { BaseHandler } from "./BaseHandler";
import { Handler } from "./Handler";
import { MergeRequestPayload } from "../payload";

export abstract class MergeRequestHandler extends BaseHandler implements Handler {
  public event_type = "merge_request";

  public abstract isValid(payload: MergeRequestPayload): boolean;
  public abstract handle(payload: MergeRequestPayload): Promise<void>;
}
