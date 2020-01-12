function solve(input) {
    let num = Number(input.shift());
    while (num >= 0) {
        console.log(`Result: ${(num * 2).toFixed(2)}`);
        num = Number(input.shift());
    }
    console.log("Negative number!");
}

solve([12, 43.2144, 12.3, 543.23, -4]);
solve([23.43, 12.3245, 0, 65.23432, 23, 65, -12]);
solve([-123]);
