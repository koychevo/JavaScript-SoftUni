function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift().toLowerCase();
    let carClass = "Luxury class";
    let carType = "Cabrio";
    let autoPrice = 0.9 * budget;
    if(season === "winter" || budget > 500) {
        carType = "Jeep";
    }
    if(budget <= 100) {
        carClass = "Economy class";
        autoPrice = ((season === "summer") ? 0.35 : 0.65) * budget;
    } else if(budget <= 500) {
        carClass = "Compact class";
        autoPrice = ((season === "summer") ? 0.45 : 0.8) * budget;
    }
    console.log(carClass);
    console.log(`${carType} - ${autoPrice.toFixed(2)}`);
}

solve([450, "Summer"]);
solve([450, "Winter"]);
solve([99.99, "Summer"]);
solve([70.50, "Winter"]);
solve([1010, "Summer"]);
solve([1010, "Winter"]);
