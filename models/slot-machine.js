import 'dotenv/config';

const CHERRY = process.env.CHERRY;
const LEMON = process.env.LEMON;
const APPLE = process.env.APPLE;
const BANANA = process.env.BANANA;
const COINS = process.env.COINS;

export const getParametersGame = () => {

    const reels = [
        [CHERRY, LEMON, APPLE, LEMON, BANANA, BANANA, LEMON, LEMON],
        [LEMON, APPLE, LEMON, LEMON, CHERRY, APPLE, BANANA, LEMON],
        [LEMON, APPLE, LEMON, APPLE, CHERRY, LEMON, BANANA, LEMON],
    ];
    return  {
        reels,
        coins:COINS, //default amount of coins
        fruits: [CHERRY, LEMON, APPLE, BANANA]
    };

};

export const calculateResult = (result, coins) => {
    let countCoins = coins - 1;
    let message = "You lost!";
    let won = false;
    let rewards = {
        50: [CHERRY, CHERRY, CHERRY],
        40: [CHERRY, CHERRY],
        20: [APPLE, APPLE, APPLE],
        10: [APPLE, APPLE],
        15: [BANANA, BANANA, BANANA],
        5: [BANANA, BANANA],
        3: [LEMON, LEMON, LEMON],
    };
    let sortedKeys = Object.keys(rewards)
        .map(Number) // Convert keys from strings to numbers
        .sort((a, b) => b - a); // Sort keys in descending order
    for (let key of sortedKeys) {
        let pattern = rewards[key];
        
        if (result.slice(0, pattern.length).join() === pattern.join()) {
            countCoins += +key; 
            message = `Congratulations, you won ${key} coins with ${pattern.join(" ")}!`;
            won = true;
            break; 
        }
    }
    if (countCoins === 0) {
        message += ", You don't have enough coins to play!";
        
    }

    return  {
        text: message,
        coins: countCoins, 
        won
    };

};