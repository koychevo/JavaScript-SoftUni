function solve(input) {
    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percentExtraExpenses = Number(input[3]);
    
    if(nightsCount > 7) {
        pricePerNight *= 0.95; 
    }
    
    let expenses = nightsCount * pricePerNight + percentExtraExpenses / 100 * budget;
    let difference = budget - expenses;

    if(difference >= 0) {
        return `Ivanovi will be left with ${difference.toFixed(2)} leva after vacation.`;
    } else {
        return `${(-difference).toFixed(2)} leva needed.`;
    }
}

console.log(solve([800.50, 8, 100, 2]));
console.log(solve([500, 7, 66, 15]));
