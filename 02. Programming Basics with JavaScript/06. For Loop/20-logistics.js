function solve(input) {
    let goodsCounter = Number(input.shift());
    let busCounter = truckCounter = trainCounter = 0;
    let price = 0;
    for(let i = 0; i < goodsCounter; i++) {
        let goods = Number(input.shift());
        if(goods <= 3) {
            price += goods * 200;
            busCounter += goods;
        } else if(goods <= 11) {
            price += goods * 175;
            truckCounter += goods;
        } else {
            price += goods * 120;
            trainCounter += goods;
        }
    }
    let goodsWeight = busCounter + truckCounter + trainCounter;
    console.log((price / goodsWeight).toFixed(2));
    console.log(`${(busCounter / goodsWeight * 100).toFixed(2)}%`);
    console.log(`${(truckCounter / goodsWeight * 100).toFixed(2)}%`);
    console.log(`${(trainCounter / goodsWeight * 100).toFixed(2)}%`);
}

solve([4, 1, 5, 16, 3]);
solve([5, 2, 10, 20, 1, 7]);
