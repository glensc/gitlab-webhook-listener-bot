import { Router } from "express";

import { asyncHandler } from "../util";

import main from "./main";
import probes from "./probes";
import webhook from "./webhook";

const router: Router = Router();
const webhookHandler = asyncHandler(webhook);

router.get("/", main);
router.post("/", webhookHandler);
router.use("/probes", probes);
// @deprecated use "POST /" instead
router.post("/webhook", webhookHandler);

export default router;
