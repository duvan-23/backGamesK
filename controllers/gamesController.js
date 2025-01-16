import * as gamesModel from '../models/gamesModel.js';
import logger from '../utils/logger.js';

//Get all games
export const getAllGames = async (req, res) => {
    try {
        const games = await gamesModel.getAllGames();
        res.status(200).json( { games });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch games', message: error.message });
        logger.error(`Failed to fetch games: ${error.message}`);
    }
};

//Get games filtered by name
export const getGamesByName = async (req, res) => {
    const { title } = req.params;
    try {
        const games = await gamesModel.getGamesByName(title);
        res.status(200).json( { games });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch games', message: error.message });
        logger.error(`Failed to fetch games: ${error.message}`);
    }
};