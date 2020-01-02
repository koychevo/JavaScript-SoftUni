function solve(input) {
    let n = Number(input.shift());
    let maxNum = Number.NEGATIVE_INFINITY;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        num = Number(input.shift());
        if (maxNum < num) {
            maxNum = num;
        }
        sum += num;
    }
    if (sum - maxNum === maxNum) {
        console.log("Yes");
        console.log(`Sum = ${maxNum}`);
    } else {
        console.log("No");
        console.log(`Diff = ${Math.abs(maxNum - (sum - maxNum))}`);
    }
}

solve([7, 3, 4, 1, 1, 2, 12, 1]);
solve([4, 6, 1, 2, 3]);
solve([3, 1, 1, 10]);
solve([3, 5, 5, 1]);
solve([3, 1, 1, 1]);
