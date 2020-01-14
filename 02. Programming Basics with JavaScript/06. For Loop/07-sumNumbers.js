function solve(input) {
    let n = parseInt(input.shift());
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += Number(input[i]);
    }
    console.log(sum);
}

solve([2, 10, 20]);
solve([3, -10, -20,-30]);
solve([4, 45, -20, 7, 11]);
solve([1, 999]);
solve([0]);
