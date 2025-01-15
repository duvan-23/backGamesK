import * as currencyModel from '../models/currency.js';
import logger from '../utils/logger.js';

export const currency = async (req, res) => {
    try {
        //get currency values
        const parameters = await currencyModel.currency();
        res.status(200).json( {data: parameters.data.rates });
    } catch (error) {
        res.status(500).json({ error: 'Failed to load currency', message: error.message });
        logger.error(`Failed to load currency: ${error.message}`);
    }
};