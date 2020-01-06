function solve(input) {
    let km = Number(input.shift());
    let time = input.shift().toLowerCase();
    let price = 0;
    if(km < 20) {
        let kmPrice = time === "day" ? 0.79 : 0.9;
        price = km * kmPrice + 0.7;
    } else if(km < 100) {
        price = km * 0.09;
    } else {
        price = km * 0.06;
    }
    console.log(price.toFixed(2));
}

solve([5, "day"]);
solve([7, "night"]);
solve([25, "day"]);
solve([180, "night"]);
