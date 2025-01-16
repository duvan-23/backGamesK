import fs from 'fs';
import path from 'path';

//Json path
const gamesFilePath = path.join(process.cwd(), '/data/game-data.json');

export const getAllGames = () => {
    return new Promise((resolve, reject) => {
        //Read Json file
        fs.readFile(gamesFilePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
};

export const getGamesByName = (title = '') => {
    return new Promise((resolve, reject) => {
         //Read Json file   
        fs.readFile(gamesFilePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                let games = JSON.parse(data);
                if (title) {
                    //Filter the games by title
                    games = games.filter(game =>
                        game.title.toLowerCase().includes(title.toLowerCase())
                    );
                }
                resolve(games);
            }
        });
    });
};