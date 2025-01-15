import * as slotModel from '../models/slot-machine.js';
import logger from '../utils/logger.js';

export const getParametersGame = async (req, res) => {
    try {
        //get parameters game
        const parameters = slotModel.getParametersGame();
        res.status(200).json( { parameters } );
    } catch (error) {
        res.status(500).json({ error: 'Failed to load parameters', message: error.message });
        logger.error(`Failed to load parameters: ${error.message}`);
    }
};

export const calculateResult = async (req, res) => {
    try {
        let {result, coins} = req.body;
        const parameters = slotModel.calculateResult(result, coins);
        res.status(200).json( { parameters } );
    } catch (error) {
        res.status(500).json({ error: 'Failed to calculate', message: error.message });
        logger.error(`Failed to calculate: ${error.message}`);
    }
};
