function solve(input) {
    let n = Number(input.shift());
    for(let row = 1; row <= n; row++) {
        let line = " ".repeat(n - row) + "*" + "-*".repeat(row - 1);
    console.log(line);
    }
    for(let row = n- 1; row >= 1; row--) {
        let line = " ".repeat(n - row) + "*" + "-*".repeat(row - 1);
    console.log(line);
    }
}

solve([2]);
solve([3]);
solve([4]);