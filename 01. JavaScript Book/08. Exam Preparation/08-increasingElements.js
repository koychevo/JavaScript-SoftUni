function solve(input) {
    let n = Number(input.shift());
    let previousNum = Number(input.shift());
    let maxIncreasing = 0;
    let increasing = 1;
    for(let i = 0; i < n - 1; i++) {
        let num = Number(input.shift());
        if(num > previousNum) {
            increasing++;
        } else {
            increasing = 1;
        }
        if(maxIncreasing < increasing) {
            maxIncreasing = increasing;
        }
        previousNum = num;
    }
    console.log(maxIncreasing);
}

solve([3, 5, 2, 4]);
solve([4, 2, 8, 7, 6]);
solve([4, 1, 2, 4, 4]);
solve([4, 5, 6, 7, 8]);
