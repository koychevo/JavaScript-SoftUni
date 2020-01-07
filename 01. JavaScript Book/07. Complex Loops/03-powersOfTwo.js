function solve(input) {
    let n = Number(input.shift());
    for(let i = 0; i <= n; i++) {
        console.log(Math.pow(2, i));
    }
}

solve([8]);