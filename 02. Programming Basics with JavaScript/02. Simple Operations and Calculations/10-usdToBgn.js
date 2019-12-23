function solve(input) {
    const rate = 1.79549;
    let usd = Number(input.shift());
    let bgn = usd * rate;
    console.log(bgn.toFixed(2));
}

solve([20]);
solve([100]);
solve([12.5]);
