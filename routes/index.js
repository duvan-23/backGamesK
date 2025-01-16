import Router from "express";
import currencyRoutes from "./currency.js";
import gamesRoutes from "./games.js";
import slotRoutes from "./slot-machine.js";

const router = Router();

router.use('/currency',currencyRoutes);
router.use('/games',gamesRoutes);
router.use('/slot-machine',slotRoutes);

export default router;