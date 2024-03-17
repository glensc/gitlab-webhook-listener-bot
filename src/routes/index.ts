import { Router } from "express";

import main from "./main";
import probes from "./probes";
import webhook from "./webhook";

const router: Router = Router();

router.get("/", main);
router.use("/probes", probes);
router.post("/webhook", webhook);

export default router;
