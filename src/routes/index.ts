import { Router } from "express";

import { asyncHandler } from "../util";

import main from "./main";
import probes from "./probes";
import webhook from "./webhook";

const router: Router = Router();

router.get("/", main);
router.use("/probes", probes);
router.post("/webhook", asyncHandler(webhook));

export default router;
