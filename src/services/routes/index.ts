import { Router } from "express";
import main from "./main";

const router = Router();

router.get("/", main);

export default router;
