import { BaseHandler } from "../core/BaseHandler";
import { NotePayload } from "../payload";
import { EVENT_TYPES } from "../types";

export abstract class NoteHandler<P = NotePayload> extends BaseHandler<P>  {
  public event_types = [EVENT_TYPES.NOTE];
}
