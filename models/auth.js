import { createToken } from '../middleware/auth.js';
import 'dotenv/config';

export const login = (username, password) => {
    let logged = 0;
    let token = "";
    const user = process.env.USERLOGIN;
    const pass = process.env.PASSWORDLOGIN;

    //Check if user name and password are correct to create the token
    if (username === user && password === pass) {
        const userData = { username: user };
        //Token valid for one hour
        token = createToken(userData, '1h'); 
        //Successfully logged in
        logged = 1;
    }
    return {logged, token};
};