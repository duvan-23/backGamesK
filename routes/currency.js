import Router from "express";
import * as currencyController from '../controllers/currency.js';
const router = Router();

//Get currency list
router.get("/", currencyController.currency);

export default router;