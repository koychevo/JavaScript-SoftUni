function solve(input) {
    let n = Number(input.shift());
    let m = Number(input.shift());
    let sum = Number(input.shift());
    let isFound = false;
    let combinations = 0;
    let result = "";
    for(let i = n; i <= m; i++) {
        for(let j = n; j <= m; j++) {
            combinations++;
            if(i + j === sum) {
                isFound = true;
                result = `Combination N:${combinations} (${i} + ${j} = ${sum})`;
                i = m + 1;
                break;
            }
        }    
    }
    if(!isFound) {
        result = `${combinations} combinations - neither equals ${sum}`;
    } 
    console.log(result);
}

solve([1, 10, 5]);
solve([23, 24, 20]);
solve([88, 888, 1000]);
solve([88, 888, 2000]);
