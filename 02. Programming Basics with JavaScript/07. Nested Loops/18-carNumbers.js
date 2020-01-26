function solve(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let numbers = "";
    for(let d1 = start + 1; d1 <= end; d1++) {
        for(let d2 = start; d2 <= end; d2++) {
            for(let d3 = start; d3 <= end; d3++) {
                for(let d4 =  start; d4 < d1; d4++) {
                    if((d2 + d3) % 2 === 0 && ((d1 % 2 === 0 && d4 % 2 !== 0) || (d1 % 2 !== 0 && d4 % 2 === 0))) {
                        numbers += `${d1}${d2}${d3}${d4} `;
                    }
                }
            }
        }    
    }
    console.log(numbers);
}

solve([2, 3]);
solve([3, 5]);
solve([5, 8]);
