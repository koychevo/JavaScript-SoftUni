function solve(input) {
    let juniors = Number(input.shift());
    let seniors = Number(input.shift());
    let type = input.shift().toLowerCase();
    let income = 0;
    switch (type) {
        case "trail":
            income = juniors * 5.5 + seniors * 7;
            break;
        case "cross-country":
            income = juniors * 8 + seniors * 9.5;
            if (juniors + seniors >= 50) {
                income *= 0.75;
            }
            break;
        case "downhill":
            income = juniors * 12.25 + seniors * 13.75;
            break;
        case "road":
            income = juniors * 20 + seniors * 21.5;
            break;
    }
    console.log((0.95 * income).toFixed(2));
}

solve([10, 20, "trail"]);
solve([20, 25, "cross-country"]);
solve([30, 25, "cross-country"]);
solve([10, 10, "downhill"]);
solve([3, 40, "road"]);
