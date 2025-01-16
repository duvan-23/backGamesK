import Router from "express";
import * as gamesController from '../controllers/gamesController.js';
const router = Router();
//Get all games
router.get("/", gamesController.getAllGames);
//Get games filtered by name
router.get('/:title', gamesController.getGamesByName);

export default router;