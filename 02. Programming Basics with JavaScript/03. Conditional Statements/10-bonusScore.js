function solve(input) {
    let num = Number(input.shift());
    let bonusScore = 0;
    if(num <= 100) {
        bonusScore = 5;
    } else if(num <= 1000) {
        bonusScore = 0.2 * num;
    } else {
        bonusScore = 0.1 * num;
    }
    if(num % 2 === 0) {
        bonusScore++;
    }
    if(num % 10 === 5) {
        bonusScore += 2;
    }
    console.log(bonusScore);
    console.log(num + bonusScore);
}

solve([20]);
solve([175]);
solve([2703]);
solve([15875]);
