function solve([arg1, arg2, arg3]) {
    let daysInMonth = parseInt(arg1);
    let dayEarnings = parseFloat(arg2);
    let usdToBgn = parseFloat(arg3);
    let brutoMonthEarnings = dayEarnings * daysInMonth * usdToBgn;
    let brutoYearEarning = (12 + 2.5) * brutoMonthEarnings;
    let dailyNetoEarnings = 0.75 * brutoYearEarning / 365;
    console.log(dailyNetoEarnings.toFixed(2));
}

solve([21, 75, 1.59]);
solve([15, 105, 1.71]);
solve([22, 199.99, 1.5])
