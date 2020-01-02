function solve(input) {
    let minNum = Number.POSITIVE_INFINITY;
    let n = Number(input.shift());
    for(let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if(num < minNum) {
            minNum = num;
        }
    }
    console.log(minNum);
}

solve([2, 100, 99]);
solve([3, -10, 20, -30]);
solve([4, 45, -20, 7, 99]);
