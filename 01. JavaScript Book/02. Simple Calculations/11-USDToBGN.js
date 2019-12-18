function solve(usd) {
    const rate = 1.79549;
    let bgn = usd * rate;
    console.log(`${bgn.toFixed(2)} BGN`);
}

solve(20);
solve(100);
solve(12.5);
