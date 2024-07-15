import { Router } from "express";
import { getCepController } from "../controller/index.js";
import { validadeCEPMiddleware } from "../middleware/index.js";

const router = Router();

router.get(`/:CEP`, validadeCEPMiddleware, getCepController);

export default router;