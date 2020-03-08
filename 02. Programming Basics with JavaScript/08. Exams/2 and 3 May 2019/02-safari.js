function calculateTrip(input) {
    let budget = Number(input.shift());
    let fuel = Number(input.shift());
    let day = input.shift();
    let costs = 2.10 * fuel + 100;
    if(day === "Saturday") {
        costs *= 0.9;
    }
    if(day === "Sunday") {
        costs *= 0.8;
    }
    let result = "";
    if(costs > budget) {
        result = `Not enough money! Money needed: ${(costs - budget).toFixed(2)} lv.`;
    } else {
        result = `Safari time! Money left: ${(budget - costs).toFixed(2)} lv. `;
    }
    console.log(result);
}

calculateTrip([1000, 10, "Sunday"]);
calculateTrip([120, 30, "Saturday"]);
calculateTrip([105.20, 15, "Sunday"]);
