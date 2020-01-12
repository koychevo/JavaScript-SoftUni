function solve(input) {
    let chrysanthemum = Number(input.shift());
    let roses = Number(input.shift());
    let tulips = Number(input.shift());
    let season = input.shift().toLowerCase();
    let holiday = input.shift().toLowerCase();
    let chrysanthemumPrice = 3.75;
    let rosePrice = 4.5;
    let tulipPrice = 4.15;
    if (season === "spring" || season === "summer") {
        chrysanthemumPrice = 2;
        rosePrice = 4.1;
        tulipPrice = 2.5;
    }
    let costs = chrysanthemum * chrysanthemumPrice + roses * rosePrice + tulips * tulipPrice;
    if(holiday === "y") {
        costs *= 1.15;
    }
    if(tulips > 7 && season === "spring") {
        costs *= 0.95;
    }
    if(roses >= 10 && season === "winter") {
        costs *= 0.9;
    }
    if(chrysanthemum + roses + tulips > 20) {
        costs *= 0.8;
    }
    costs += 2;
    console.log(costs.toFixed(2));
}

solve([2, 4, 8, "Spring", "Y"]);
solve([3, 10, 9, "Winter", "N"]);
solve([10, 10, 10, "Autumn", "N"]);
