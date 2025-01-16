import axios from 'axios';
import 'dotenv/config';

export const currency = async() => {
    //Consult external currency exchange api 
    return  await axios.get(process.env.URLCURRENCY);
};
