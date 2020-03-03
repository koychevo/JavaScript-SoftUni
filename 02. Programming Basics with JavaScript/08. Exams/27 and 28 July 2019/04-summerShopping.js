function solve(input) {
    let budget = Number(input.shift());
    let bathrobePrice = Number(input.shift());
    let discount = Number(input.shift());
    let umbrellaPrice = 2 / 3 * bathrobePrice;
    let flipFlopPrice = 0.75 * umbrellaPrice;
    let bagPrice = 1 / 3 * (bathrobePrice + flipFlopPrice);
    let costs = (100 - discount) / 100 * (bathrobePrice + umbrellaPrice + bagPrice + flipFlopPrice);
    let result = `Annie's sum is ${costs.toFixed(2)} lv. `;
    if(costs <= budget) {
        result += `She has ${(budget - costs).toFixed(2)} lv. left.`;
    } else {
        result += `She needs ${(costs - budget).toFixed(2)} lv. more.`;
    }
    console.log(result);
}

solve([40, 15, 5]);
solve([25, 6, 10]);
solve([30, 17, 3]);
