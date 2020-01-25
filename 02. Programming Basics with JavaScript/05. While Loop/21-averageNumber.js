function solve(input) {
    let n = Number(input.shift());
    let sum = 0;
    let counter = 0;
    while(counter < n) {
        sum += Number(input.shift());
        counter++;
    }
    console.log((sum / n).toFixed(2));
}

solve([4, 3, 2, 4, 2]);
solve([2, 6, 4]);
solve([3, 82, 43, 22]);
solve([4, 95, 23, 76, 23]);
