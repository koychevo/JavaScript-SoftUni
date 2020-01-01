function solve(input) {
    const vipPrice = 499.99;
    const normalPrice = 249.99;
    let budget = Number(input.shift());
    let ticketCategory = input.shift().toLowerCase();
    let people = Number(input.shift());
    let moneyForTickets = 0;
    if(people <= 4) {
        moneyForTickets = budget * (1 - 0.75);
    } else if(people <= 9) {
        moneyForTickets = budget * (1 - 0.6);
    } else if(people <= 24) {
        moneyForTickets = budget * (1 - 0.5);
    } else if(people <= 49) {
        moneyForTickets = budget * (1 - 0.4);
    } else {
        moneyForTickets = budget * (1 - 0.25);
    }
    let ticketPrice = ticketCategory === "vip" ? vipPrice : normalPrice;  
    let ticketsCosts = people * ticketPrice;
    let result = "";
    if(ticketsCosts <= moneyForTickets) {
        result = `Yes! You have ${(moneyForTickets - ticketsCosts).toFixed(2)} leva left.`;
    } else {
        result = `Not enough money! You need ${(ticketsCosts - moneyForTickets).toFixed(2)} leva.`;
    }
    console.log(result);
}

solve([1000, "Normal", 1]);
solve([30000, "VIP", 49]);
