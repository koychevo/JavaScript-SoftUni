function solve(input) {
    let n = Number(input.shift());
    for(let i = 0; i < n; i++) {
        console.log("*".repeat(n));
    }
}

solve([2]);
console.log(" ".repeat(10));
solve([3]);
console.log(" ".repeat(10));
solve([4]);
