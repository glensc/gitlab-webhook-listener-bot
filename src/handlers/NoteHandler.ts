import { BaseHandler } from "../core/BaseHandler";
import { EVENT_TYPES } from "../types";

import type { NotePayload } from "../payload";

export abstract class NoteHandler<P = NotePayload> extends BaseHandler<P>  {
  public event_types = [EVENT_TYPES.NOTE];
}
