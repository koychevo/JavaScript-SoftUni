function solve(input) {
    let n = Number(input.shift());
    let sum = 0;
    let maxNum = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < n; i++) {
        let num = Number(input.shift());
        sum += num;
        if(maxNum < num) {
            maxNum = num;
        }
    }
    sum -= maxNum;
    let result = "";
    if(maxNum === sum) {
        result = `Yes\nSum = ${sum}`;
    } else {
        result = `No\nDiff = ${Math.abs(sum - maxNum)}`;
    }
    console.log(result);
}

solve([7, 3, 4, 1, 1, 2, 12, 1]);
solve([4, 6, 1, 2, 3]);
solve([3, 1, 1, 10]);
solve([3, 5, 5, 1]);
solve([3, 1, 1, 1]);
