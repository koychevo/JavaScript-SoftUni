function solve(input) {
    let n = Number(input.shift());
    if(((n !== 0) && (n < 100)) || (n > 200)) {
        console.log("invalid");
    }
}

solve([75]);
solve([0]);
solve([15]);
solve([150]);