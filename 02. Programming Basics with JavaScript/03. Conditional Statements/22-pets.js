function solve(input) {
    let days = Number(input.shift());
    let foodSupplied  = Number(input.shift());
    let dogDailyFood = Number(input.shift());
    let catDailyFood = Number(input.shift());
    let turtleDailyFood = Number(input.shift());
    let foodNeeded = days * (dogDailyFood + catDailyFood + turtleDailyFood / 1000);
    let difference = foodSupplied - foodNeeded;
    let result = "";
    if(difference < 0) {
        result = `${Math.ceil(Math.abs(difference))} more kilos of food are needed.`;
    } else {
        result = `${Math.floor(difference)} kilos of food left.`;
    }
    console.log(result);
}

solve([2, 10, 1, 1, 1200]);
solve([5, 10, 2.1, 0.8, 321]);
