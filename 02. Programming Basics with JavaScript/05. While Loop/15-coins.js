function solve(input) {
    let money = Number(input.shift()) * 100;
    let coins = [200, 100, 50, 20, 10, 5, 2, 1];
    let coinsCounter = 0;
    let i = 0;
    while(money > 0 && i < 8) {
        coinsCounter += Math.trunc(money / coins[i]);
        money = money % coins[i];
        i++;
    }
    console.log(coinsCounter);
}

solve([1.23]);
solve([2]);
solve([0.56]);
solve([2.73]);
