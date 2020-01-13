function solve(input) {
    let n = Number(input.shift());
    let counter = 0;
    let maxNum = Number.NEGATIVE_INFINITY;
    while(counter < n) {
        let num = Number(input.shift());
        if(num > maxNum) {
            maxNum = num;
        }
        counter++;
    }
    console.log(maxNum);
}

solve([2, 100, 99]);
solve([3,-10, 20, -30]);
solve([4, 45, -20, 7, 99]);
solve([1, 999]);
solve([2, -1, -2]);
