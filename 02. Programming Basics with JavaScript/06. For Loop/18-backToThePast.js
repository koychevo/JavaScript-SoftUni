function solve(input) {
    let money = Number(input.shift());
    let endYear = Number(input.shift());
    let years = 17;
    for(let i = 1800; i <= endYear; i++) {
        years++;
        money -= (i % 2 === 0) ? 12000 : 12000 + 50 * years;
    }
    let result = "";
    if(money < 0) {
        result = `He will need ${Math.abs(money).toFixed(2)} dollars to survive.`;
    } else {
        result = `Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`;
    }
    console.log(result);
}

solve([50000, 1802]);
solve([100000.15, 1808]);