import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gamesFilePath = path.join(__dirname, '../data/game-data.json');

export const getAllGames = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(gamesFilePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
};