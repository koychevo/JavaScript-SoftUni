function solve(input) {
    let n = Number(input.shift());
    let counter = 0;
    let sum = 0;
    while(counter < n) {
        let amount = Number(input.shift());
        if(amount < 0) {
            console.log("Invalid operation!");
            break;
        }
        sum += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        counter++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

solve([3, 5.51, 69.42, 100]);
solve([5, 120, 45.55, -150]);
