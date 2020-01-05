function solve(input) {
    let budget = Number(input.shift());
    let statists = Number(input.shift());
    let clothingPrice = Number(input.shift());
    let clothingSpent = statists * clothingPrice;
    if(statists > 150) {
        clothingSpent *= 0.9;
    }
    let moneyLeft = budget - clothingSpent - 0.1 * budget;
    let result = "";
    if(moneyLeft < 0) {
        result = `Not enough money!\nWingard needs ${Math.abs(moneyLeft).toFixed(2)} leva more.`;
    } else {
        result = `Action!\nWingard starts filming with ${moneyLeft.toFixed(2)} leva left.`;
    }
    console.log(result);
}

solve([20000, 120, 55.5]);
solve([15437.62, 186, 57.99]);
solve([9587.88, 222, 55.68]);
