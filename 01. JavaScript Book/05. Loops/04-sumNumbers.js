function solve(input) {
    let sum = 0;
    let n = Number(input.shift());
    for(let i = 0; i < n; i++) {
        sum += Number(input.shift());
    }
    console.log(sum);
}

solve([2, 10, 20]);
solve([3, -10, -20, -30]);
solve([4, 45, -20, 7, 11]);
solve([1, 999]);
solve([0]);
