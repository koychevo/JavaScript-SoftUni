function solve(input) {
    let n = Number(input.shift());
    let numbers = input;
    let prevSum = Number(numbers[0]) +Number(numbers[1]);
    let maxDiff = 0;
    let result = "";
    for(let i = 2; i < 2 * n; i+=2) {
        let sum = Number(numbers[i]) + Number(numbers[i+1]);
        let diff = Math.abs(sum - prevSum);
        if(diff > maxDiff) {
            maxDiff = diff;
        }
        prevSum = sum;
    }
    if(maxDiff === 0) {
        result = `Yes, value=${prevSum}`;
    } else {
        result = `No, maxdiff=${maxDiff}`;
    }
    console.log(result);
}

solve([3, 1, 2, 0, 3, 4, -1]);
solve([2, 1, 2, 2, 2]);
solve([4, 1, 1, 3, 1, 2, 2, 0, 0]);
solve([1, 5, 5]);
solve([2, -1, 0, 0, -1]);
solve([2, -1, 2, 0, -1]);
