function solve(input) {
    let months = Number(input.shift());
    let electricityCosts = otherCosts = 0
    let waterCosts = months * 20;  
    let internetCosts = months * 15;
    for(let i = 0; i < months; i++) {
        let electricity = Number(input.shift());
        electricityCosts += electricity;
        let others = 1.2 * (20 + 15 + electricity);
        otherCosts += others;
    }
    console.log(`Electricity: ${electricityCosts.toFixed(2)} lv`);
    console.log(`Water: ${waterCosts.toFixed(2)} lv`);
    console.log(`Internet: ${internetCosts.toFixed(2)} lv`);
    console.log(`Other: ${otherCosts.toFixed(2)} lv`);
    console.log(`Average: ${((electricityCosts + waterCosts + internetCosts + otherCosts) / months).toFixed(2)} lv`);
}

solve([5, 68.63, 89.25, 132.53, 93.53, 63.22]);
solve([8, 123.54, 231.54, 140.23, 100, 122.4, 430, 178.52, 64.2]);
