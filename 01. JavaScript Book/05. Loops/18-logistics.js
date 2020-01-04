function solve(input) {
    let countOfLoads = Number(input[0]);
    let microbusTons = truckTons = trainTons = 0;
    for(let i = 1; i <= countOfLoads; i++) {
        currentLoad = Number(input[i]);
        if(currentLoad <= 3) {
            microbusTons += currentLoad;
        } else if(currentLoad <= 11) {
            truckTons += currentLoad;
        } else {
            trainTons += currentLoad;
        }
    }
    let tons = microbusTons + truckTons + trainTons;
    let averagePrice = (microbusTons * 200 + truckTons * 175 + trainTons * 120) / tons;
    console.log(averagePrice.toFixed(2));
    console.log(`${(microbusTons / tons * 100).toFixed(2)}%`);
    console.log(`${(truckTons / tons * 100).toFixed(2)}%`);
    console.log(`${(trainTons / tons * 100).toFixed(2)}%`);
}

solve([4, 1, 5, 16, 3]);
solve([5, 2, 10, 20, 1, 7]);
solve([4, 53, 7, 56, 999]);
