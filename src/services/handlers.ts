import { MergeRequestHandler } from "../handlers/merge_request_handler";
import logger from "./logger";

export default [
  new MergeRequestHandler(logger),
];
