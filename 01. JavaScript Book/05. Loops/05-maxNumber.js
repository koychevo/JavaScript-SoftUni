function solve(input) {
    let n = Number(input.shift());
    let maxNum = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if(num > maxNum) {
            maxNum = num;
        }
    }
    console.log(maxNum);
}

solve([2, 100, 99]);
solve([3, -10, 20, -30]);
solve([4, 45, -20, 7, 99]);
solve([1, 999]);
solve([2, -1, -2]);
