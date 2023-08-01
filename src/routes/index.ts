import { Router } from "express";
import main from "./main";
import webhook from "./webhook";
import probes from "./probes";

const router = Router();

router.get("/", main);
router.use("/probes", probes);
router.post("/webhook", webhook);

export default router;
