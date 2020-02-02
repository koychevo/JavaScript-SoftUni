function solve(input) {
    let chrysamthemums = Number(input.shift());
    let roses = Number(input.shift());
    let tulips = Number(input.shift());
    let season = input.shift().toLowerCase();
    let holidays = input.shift().toLowerCase();
    let chrysamthemumsPrice = 2;
    let rosesPrice = 4.10;
    let tupilsPrice = 2.50;
    if (season === "autumn" || season === "winter") {
        chrysamthemumsPrice = 3.75;
        rosesPrice = 4.50;
        tupilsPrice = 4.15;
    }
    price = tulips * tupilsPrice + chrysamthemums * chrysamthemumsPrice + roses * rosesPrice;
    if(holidays === "y") {
        price *= 1.15;
    }
    if(tulips > 7 && season === "spring") {
        price *= 0.95;
    }
    if(season === "winter" && roses >= 10) {
        price *= 0.9;
    }
    if(tulips + roses + chrysamthemums > 20) {
        price *= 0.8;
    }
    price += 2;
    console.log(price.toFixed(2));
}

solve([2, 4, 8, "Spring", "Y"]);
solve([3, 10, 9, "Winter", "N"]);
solve([10, 10, 10, "Autumn", "N"]);
