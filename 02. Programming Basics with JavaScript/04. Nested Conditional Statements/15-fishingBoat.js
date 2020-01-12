function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift().toLowerCase();
    let anglers = Number(input.shift());
    let costs = 0;
    switch (season) {
        case "spring":
            costs = 3000;
            break;
        case "summer":
        case "autumn":
            costs = 4200;
            break;
        case "winter":
            costs = 2600;
            break;
    }
    if(anglers <= 6) {
        costs *= 0.9;
    } else if(anglers <= 11) {
        costs *= 0.85;
    } else {
        costs *= 0.75;
    } 
    if(anglers % 2 === 0 && season !== "autumn") {
        costs *= 0.95;
    }
    let result = budget - costs;
    if(result < 0) {
        result = `Not enough money! You need ${Math.abs(result).toFixed(2)} leva.`;
    } else {
        result = `Yes! You have ${result.toFixed(2)} leva left.`;
    }
    console.log(result);
}

solve([3000, "Summer", 11]);
solve([3600, "Autumn", 6]);
solve([2000, "Winter", 13]);
