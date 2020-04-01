function solve(input) {
    let targetProfit = Number(input.shift());
    let profit = 0;
    let isNotTarget = true;
    let drink = input.shift();
    while(drink !== 'Party!') {
        let drinkPrice = Number(input.shift());
        let price = drink.length * drinkPrice;
        if(price % 2 !== 0) {
            price *= 0.75;
        }
        profit += price;
        if(profit >= targetProfit) {
            console.log('Target acquired.');
            isNotTarget = false;
            break;
        }
        drink = input.shift();
    }

    if(isNotTarget) {
        console.log(`We need ${(targetProfit - profit).toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${profit.toFixed(2)} leva.`);
}

solve([500, 'Bellini', 6, 'Bamboo', 7, 'Party!']);
solve([100, 'Sidecar', 7, 'Mojito', 5, 'White Russian', 10]);