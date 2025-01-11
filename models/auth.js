import { createToken } from '../middleware/auth.js';
import 'dotenv/config';

export const login = (username, password) => {
    let logged = 0;
    let token = "";
    const user = process.env.USERLOGIN;
    const pass = process.env.PASSWORDLOGIN;

    if (username === user && password === pass) {
        const userData = { username: user };
        token = createToken(userData, '1h'); 
        logged = 1;
    }
    return {logged, token};
};