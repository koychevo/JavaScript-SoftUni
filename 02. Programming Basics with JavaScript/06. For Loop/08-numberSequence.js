function solve(input) {
    let n = Number(input.shift());
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < n; i++) {
        let num = Number(input[i]);
        if(min > num) {
            min = num;
        }
        if (max < num) {
            max = num;
        }
    }
    console.log(`Max number: ${max}`);
    console.log(`Min number: ${min}`);
}

solve([5, 10, 20, 304, 0, 50]);
solve([6, 250, 5, 2, 0, 100, 1000]);
