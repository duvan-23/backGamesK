import * as authModel from '../models/auth.js';
import logger from '../utils/logger.js';

//Login
export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const login = authModel.login(username, password);
        if (login.logged) {
            res.status(200).json({ token: login.token, message: 'Login successful' });
        }else{
            res.status(401).json({ message: 'Invalid credentials' });
        }

    }catch (error) {
        res.status(500).json({ error: 'login failed', message: error.message });
        logger.error(`login failed: ${error.message}`);
    }
};
