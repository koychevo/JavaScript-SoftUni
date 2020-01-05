function solve(input) {
    const puzzlePrice = 2.60;
    const talkingDollPrice = 3.00;
    const teddyBearPrice = 4.10;
    const minionPrice = 8.20;
    const truckPrice = 2.00;

    let tripPrice = Number(input.shift());
    let puzzles = Number(input.shift());
    let talkingDolls = Number(input.shift());
    let teddyBears = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());

    let toys = puzzles + talkingDolls + teddyBears + minions + trucks;
    let totalPrice = puzzles * puzzlePrice + talkingDolls * talkingDollPrice + teddyBears * teddyBearPrice + minions * minionPrice + trucks * truckPrice;
    let discount = (toys < 50) ? 0 : 0.25 * totalPrice;
    totalPrice -= (discount);
    let rent = 0.1 * totalPrice;
    totalPrice -= rent;
    let difference = totalPrice -tripPrice;
    let result = "";
    if(difference < 0) {
        result = `Not enough money! ${Math.abs(difference).toFixed(2)} lv needed.`;
    } else {
        result = `Yes! ${difference.toFixed(2)} lv left.`;
    }
    console.log(result);
}

solve([40.8, 20, 25, 30, 50, 10]);
solve([320, 8, 2, 5, 5, 1]);
