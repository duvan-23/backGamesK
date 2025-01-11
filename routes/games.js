import Router from "express";
import * as gamesController from '../controllers/gamesController.js';
const router = Router();

router.get("/", gamesController.getAllGames);
router.get('/:title', gamesController.getGamesByName);

export default router;