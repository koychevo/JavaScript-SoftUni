function solve(input) {
    let money = Number(input.shift());
    let endYear = Number(input.shift());
    const startYear = 1800;
    let years = 17;
    let moneySpent = 0;
    for(let i = startYear; i <= endYear; i++) {
        years++;
        if(i % 2 === 0) {
            moneySpent += 12000;
        } else {
            moneySpent += 12000 + 50 * years;
        }
    }
    let moneyDiff = money - moneySpent;
    let result = "";
    if(moneyDiff < 0) {
        result = `He will need ${Math.abs(moneyDiff).toFixed(2)} dollars to survive.`;
    } else {
        result = `Yes! He will live a carefree life and will have ${moneyDiff.toFixed(2)} dollars left.`;
    }
    console.log(result); 
}

solve([50000, 1802]);
solve([100000.15, 1808]);

