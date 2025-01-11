import * as gamesModel from '../models/gamesModel.js';

export const getAllGames = async (req, res) => {
    try {
        //get games
        const games = await gamesModel.getAllGames();
        res.status(200).json({ games });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch games', message: error.message });
    }
};

export const getGamesByName = async (req, res) => {
    const { tittle } = req.params; // Get tittle term from route parameters
    try {
        // get games after filter
        const games = await gamesModel.getGamesByName(tittle);
        res.status(200).json({ games });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products', message: error.message });
    }
};