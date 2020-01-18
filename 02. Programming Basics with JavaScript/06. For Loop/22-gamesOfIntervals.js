function solve(input) {
    let numbers = Number(input.shift());
    let score = 0;
    let firstIntervalCounter = secondIntervalCounter = thirdIntervalCounter = forthIntervalCounter = fifthIntervalCounter = invalidCounter = 0;
    for(let i = 0; i < numbers; i++) {
        let num = Number(input.shift());
        if(num < 0 || num > 50) {
            score /= 2;
            invalidCounter++;
        } else if(num < 10) {
            score += 0.2 * num;
            firstIntervalCounter++;
        } else if(num < 20) {
            score += 0.3 * num;
            secondIntervalCounter++;
        } else if(num < 30) {
            score += 0.4 * num;
            thirdIntervalCounter++;
        } else if(num < 40) {
            score += 50;
            forthIntervalCounter++;
        } else if(num <= 50) {
            score += 100;
            fifthIntervalCounter++;
        }
    }
    console.log(score.toFixed(2));
    console.log(`From 0 to 9: ${(firstIntervalCounter / numbers * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(secondIntervalCounter / numbers * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(thirdIntervalCounter / numbers * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(forthIntervalCounter / numbers * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(fifthIntervalCounter / numbers * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidCounter / numbers * 100).toFixed(2)}%`);
}

solve([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);
