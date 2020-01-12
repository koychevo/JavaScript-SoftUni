function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift().toLowerCase();
    let costs = 0;
    let housing = "Camp";
    let place = "";
    if(season === "winter" || budget > 1000) {
        housing = "Hotel";
    }
    if(budget <= 100) {
        place = "Bulgaria";
        costs = (season === "summer") ? 0.3 * budget : 0.7 * budget;
    } else if(budget <= 1000) {
        place = "Balkans";
        costs = (season === "summer") ? 0.4 * budget : 0.8 * budget;
    } else {
        place = "Europe";
        costs =  0.9 * budget;
    }
    console.log(`Somewhere in ${place}`);
    console.log(`${housing} - ${costs.toFixed(2)}`);
}

solve([50, "summer"]);
solve([75, "winter"]);
solve([312, "summer"]);
solve([678.53, "winter"]);
solve([1500, "sommer"]);
