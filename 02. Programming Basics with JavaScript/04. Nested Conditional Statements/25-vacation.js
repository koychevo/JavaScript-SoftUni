function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift().toLowerCase();
    let location = "Alaska";
    let housing = "Hotel";
    let costs = 0.9 * budget;
    if(season === "winter") {
        location = "Morocco";
    }
    if(budget <= 1000) {
        housing = "Camp";
        costs = budget * (season === "summer" ? 0.65 : 0.45);
    } else if(budget <= 3000) {
        housing = "Hut";
        costs = budget * (season === "summer" ? 0.8 : 0.6);
    }
    console.log(`${location} - ${housing} - ${costs.toFixed(2)}`);
}

solve([800, "Summer"]);
solve([799.50, "Winter"]);
solve([1100, "Summer"]);
solve([2543.99, "Winter"]);
solve([3460, "Summer"]);
solve([5000, "Winter"]);
