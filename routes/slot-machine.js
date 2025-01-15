import Router from "express";
import * as slotController from '../controllers/slot-machine.js';
import { validateCalculate } from "../middleware/validationRequest.js";
const router = Router();

router.get("/", slotController.getParametersGame);
router.put("/",validateCalculate, slotController.calculateResult);

export default router;