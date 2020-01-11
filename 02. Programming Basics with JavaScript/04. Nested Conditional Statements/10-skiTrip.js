function solve(input) {
    let days = parseInt(input.shift());
    let roomType = input.shift().toLowerCase();
    let feedback = input.shift().toLowerCase();
    let costs = 0;
    let nights = days - 1;
    if (days < 10) {
        switch (roomType) {
            case "room for one person":
                costs = nights * 18;
                break;
            case "apartment":
                costs = nights * 25 * 0.7;
                break;
            case "president apartment":
                costs = nights * 35 * 0.9;
                break;
        }
    } else if (days <= 15) {
        switch (roomType) {
            case "room for one person":
                costs = nights * 18;
                break;
            case "apartment":
                costs = nights * 25 * 0.65;
                break;
            case "president apartment":
                costs = nights * 35 * 0.85;
                break;
        }
    } else {
        switch (roomType) {
            case "room for one person":
                costs = nights * 18;
                break;
            case "apartment":
                costs = nights * 25 * 0.5;
                break;
            case "president apartment":
                costs = nights * 35 * 0.8;
                break;
        }
    }
    if(feedback === "positive") {
        costs += 0.25 * costs; 
    } else {
        costs -= 0.1 * costs;
    }
    console.log(costs.toFixed(2))
}

solve([14, "apartment", "positive"]);
solve([30, "president apartment", "negative"]);
solve([12, "room for one person", "positive"]);
solve([2, "apartment", "positive"]);
