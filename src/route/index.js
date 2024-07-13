import { Router } from "express";
import { getCepController } from "../controller/index.js";


const router = Router();

router.get(`/:CEP`, getCepController);

export default router;