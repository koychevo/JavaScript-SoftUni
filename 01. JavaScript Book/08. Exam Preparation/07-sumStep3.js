function solve(input) {
    let n = Number(input.shift());
    let sum1 = sum2 = sum3 = 0;
    for(let i = 1; i<= n; i++) {
        let num = Number(input.shift());
        if(i % 3 === 1) {
            sum1 += num;
        } else if (i % 3 === 2) {
            sum2 += num;
        } else if(i % 3 === 0) {
            sum3 += num;
        }
    }
    console.log(`sum1 = ${sum1}`);
    console.log(`sum2 = ${sum2}`);
    console.log(`sum3 = ${sum3}`);
}

solve([2, 3, 5]);
solve([4, 7, -2, 6, 12]);
solve([5, 3, 5, 2, 7, 8]);
