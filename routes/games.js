import Router from "express";
import * as gamesController from '../controllers/gamesController.js';
const router = Router();

router.get("/", gamesController.getAllGames);


export default router;