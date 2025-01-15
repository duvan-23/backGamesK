import * as gamesModel from '../models/gamesModel.js';
import logger from '../utils/logger.js';

export const getAllGames = async (req, res) => {
    try {
        //get games
        const games = await gamesModel.getAllGames();
        res.status(200).json( games );
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch games', message: error.message });
        logger.error(`Failed to fetch games: ${error.message}`);
    }
};

export const getGamesByName = async (req, res) => {
    const { title } = req.params; // Get title term from route parameters
    try {
        // get games after filter
        const games = await gamesModel.getGamesByName(title);
        res.status(200).json( games );
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch games', message: error.message });
        logger.error(`Failed to fetch games: ${error.message}`);
    }
};