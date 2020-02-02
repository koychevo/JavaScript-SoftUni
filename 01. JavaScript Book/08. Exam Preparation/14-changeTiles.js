function solve(input) {
    let money = Number(input.shift());
    let floorWidth = Number(input.shift());
    let floorLength = Number(input.shift());
    let tileLength = Number(input.shift());
    let tileHeight = Number(input.shift());
    let price = Number(input.shift());
    let workerMoney = Number(input.shift());

    let tiles = Math.ceil((floorWidth * floorLength) / (tileLength * tileHeight / 2)) + 5;
    let restMoney = money - workerMoney - price * tiles;
    if(restMoney >= 0) {
        console.log(`${restMoney.toFixed(2)} lv left.`);
    } else {
        console.log(`You'll need ${(-restMoney).toFixed(2)} lv more.`);
    }
}

solve([500, 3, 2.5, 0.5, 0.7, 7.80, 100]);
solve([1000, 5.55, 8.95, 0.90, 0.85, 13.99, 321]);
