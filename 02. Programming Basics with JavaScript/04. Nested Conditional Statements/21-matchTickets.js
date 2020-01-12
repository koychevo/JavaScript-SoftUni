function solve(input) {
    let budget = Number(input.shift());
    let ticketType = input.shift().toLowerCase();
    let visitors = Number(input.shift());
    let transportCosts = 0;
    if(visitors < 5) {
        transportCosts = 0.75 * budget;
    } else if(visitors < 10) {
        transportCosts = 0.60 * budget;
    } else if(visitors < 25) {
        transportCosts = 0.5 * budget;
    } else if(visitors < 50) {
        transportCosts = 0.4 * budget;
    } else {
        transportCosts = 0.25 * budget;
    }
    let moneyForTickets = budget - transportCosts;
    let ticketsCosts = visitors * (ticketType === "vip" ? 499.99 : 249.99);
    let result = "";
    if(moneyForTickets < ticketsCosts) {
        result = `Not enough money! You need ${(ticketsCosts - moneyForTickets).toFixed(2)} leva.`;
    } else {
        result = `Yes! You have ${(moneyForTickets - ticketsCosts).toFixed(2)} leva left.`;
    }
    console.log(result);
}

solve([1000, "Normal", 1]);
solve([30000, "VIP", 49]);
