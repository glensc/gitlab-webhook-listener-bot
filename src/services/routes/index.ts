import { Router } from "express";
import main from "./main";
import webhook from "./webhook";

const router = Router();

router.get("/", main);
router.post("/webhook", webhook);

export default router;
