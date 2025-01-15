import axios from 'axios';
import 'dotenv/config';

export const currency = async() => {
    return  await axios.get(process.env.URLCURRENCY);
};
