import * as gamesModel from '../models/gamesModel.js';

export const getAllGames = async (req, res) => {
    try {
        const games = await gamesModel.getAllGames();
        res.status(200).json({ games });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch games', message: error.message });
    }
};