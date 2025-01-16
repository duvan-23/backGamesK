import Router from "express";
import * as slotController from '../controllers/slot-machine.js';
import { validateCalculate } from "../middleware/validationRequest.js";
const router = Router();

//Get initial parameters
router.get("/", slotController.getParametersGame);
//Calculate spin result
router.put("/",validateCalculate, slotController.calculateResult);

export default router;