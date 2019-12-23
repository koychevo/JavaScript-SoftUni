function solve(input) {
    let days = parseInt(input.shift());
    let workers = parseInt(input.shift());
    let cakes = parseInt(input.shift());
    let waffels = parseInt(input.shift());
    let pancakes = parseInt(input.shift());
    totalCharity = 7 / 8 * days * workers * (cakes * 45 + waffels * 5.8 + pancakes * 3.2);
    console.log(totalCharity.toFixed(2));
}

solve([20, 8, 14, 30, 16]);
solve([131, 5, 9, 33, 46]);
