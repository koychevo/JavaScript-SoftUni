function solve(input) {
    let n = Number(input.shift());
    let m = Number(input.shift());
    let s = Number(input.shift());
    let result = "";
    for (let i = m; i >= n; i--) {
        if(i % 2 === 0 && i % 3 === 0) {
            if(i === s) {
                break;
            }
            result += `${i} `;
        }
    }
    console.log(result);
}

solve([1, 30, 15]);
solve([1, 36, 12]);
solve([20, 1000, 36]);
