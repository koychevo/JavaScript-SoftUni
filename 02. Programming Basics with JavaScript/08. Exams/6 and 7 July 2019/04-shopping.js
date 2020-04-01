function solve(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let procesors = Number(input[2]);
    let storages = Number(input[3]);
    let videoCardsExpenses = 250 * videoCards;
    let procesorsExpenses = 0.35 * videoCardsExpenses * procesors;
    let storagesExpenses = 0.1 * videoCardsExpenses * storages;
    let expenses = videoCardsExpenses + procesorsExpenses + storagesExpenses;
    
    if(videoCards > procesors) {
        expenses *= 0.85;
    }

    let difference = budget - expenses;

    if(difference >= 0) {
        return `You have ${difference.toFixed(2)} leva left!`;
    } else {
        return `Not enough money! You need ${(-difference).toFixed(2)} leva more!`;
    }
}

console.log(solve([900, 2, 1, 3]));
console.log(solve([920.45, 3, 1, 1]));
