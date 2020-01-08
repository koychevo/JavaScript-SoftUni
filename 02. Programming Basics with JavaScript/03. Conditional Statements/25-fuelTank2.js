function solve(input) {
    let fuelType = input.shift().toLowerCase();
    let liters = Number(input.shift());
    let card = input.shift().toLowerCase();
    let totalPrice = 0;
    let fuelPrice = 0;
    if(fuelType === "gasoline") {
        fuelPrice = (card === "yes") ? (2.22 - 0.18) : 2.22;
    }
    if(fuelType === "diesel") {
        fuelPrice = (card === "yes") ? (2.33 - 0.12) : 2.33;
    }
    if(fuelType === "gas") {
        fuelPrice = (card === "yes") ? (0.93 - 0.08) : 0.93;
    }
    if(liters < 20) {
        totalPrice = liters * fuelPrice;
    } else if(liters <= 25) {
        totalPrice = 0.92 * liters * fuelPrice;
    } else {
        totalPrice = 0.9 * liters * fuelPrice;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`)
}

solve(["Gas", 30, "Yes"]);
solve(["Gasoline", 25, "No"]);
solve(["Diesel", 19, "No"]);
