function solve(input) {
    let days = Number(input.shift());
    let hours = Number(input.shift());
    let sum = 0;
    for(let day = 1; day <= days; day++) {
        let daySum = 0;
        for(hour = 1; hour <= hours; hour++) {
            if(day % 2 === 0 && hour % 2 !== 0) {
                daySum += 2.5;
            } else if (day % 2 !== 0 && hour % 2 === 0) {
                daySum += 1.25;
            } else {
                daySum += 1;
            }
        }
        console.log(`Day: ${day} - ${daySum.toFixed(2)} leva`);
        sum += daySum;
    }
    console.log(`Total: ${sum.toFixed(2)} leva`);
}

solve([2, 5]);
solve([5, 2]);