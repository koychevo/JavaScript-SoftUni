function solve(input) {
    let days = Number(input.shift());
    let hours = Number(input.shift());
    let price = 0;
    let costs = 0;
    for(let day = 1; day <= days; day++) {
        let dayCosts = 0;
        for(let hour = 1; hour <= hours; hour++) {
            if(day % 2 === 0 && hour % 2 !== 0) {
                price = 2.50;
            } else if(day % 2 !== 0 && hour % 2 === 0) {
                price = 1.25;
            } else {
                price = 1;
            }
            dayCosts += price;
        }
        costs += dayCosts;
        console.log(`Day: ${day} - ${dayCosts.toFixed(2)} leva`);
    }
    console.log(`Total: ${costs.toFixed(2)} leva`);
}

solve([2, 5]);
solve([5, 2]);
