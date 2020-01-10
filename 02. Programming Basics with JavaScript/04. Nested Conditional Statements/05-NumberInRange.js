function solve(input) {
    let n = Number(input.shift());
    if((n !== 0) && (n >= - 100) && (n <= 100)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

solve([-25]);
solve([0]);
solve([30]);
