import axios from 'axios';
import 'dotenv/config';

export const currency = async() => {
    //Consult external exchange currency api 
    return  await axios.get(process.env.URLCURRENCY);
};
