function solve(input) {
    let wiskyPrice = Number(input.shift());
    let beerQty = Number(input.shift());
    let wineQty = Number(input.shift());
    let rakiyaQty = Number(input.shift());
    let wiskyQty = Number(input.shift());
    let rakiyaPrise = 0.5 * wiskyPrice;
    let winePrice = 0.6 * rakiyaPrise;
    let beerPrice = 0.2 * rakiyaPrise;
    let total =wiskyPrice * wiskyQty + rakiyaPrise * rakiyaQty + winePrice * wineQty + beerPrice * beerQty;
    console.log(total.toFixed(2));
}

solve([50, 10, 3.5, 6.5, 1]);
solve([63.44, 3.57, 6.35, 8.15, 2.5]);
