function solve(input) {
    let salary = Number(input.shift());
    let months = Number(input.shift());
    let costs = Number(input.shift());
    let monthsSavings = salary - 0.3 * salary - costs;
    console.log(`She can save ${(monthsSavings / salary * 100).toFixed(2)}%`);
    console.log((months * monthsSavings).toFixed(2));
}

solve([1500, 3, 800]);
solve([2050, 5, 900]);
solve([3500, 3, 997]);
