function solve(input) {
    let fuelType = input.shift().toLowerCase();
    let liters = Number(input.shift());
    let result = "Invalid fuel!";
    if(fuelType === "diesel" || fuelType === "gasoline" || fuelType === "gas") {
        if(liters < 25) {
            result = `Fill your tank with ${fuelType}!`;
        } else {
            result = `You have enough ${fuelType}.`;
        }
    }
    console.log(result);
}

solve(["Diesel", 10]);
solve(["Gasoline", 40]);
solve(["Gas", 25]);
solve(["Kerosene", 200]);

