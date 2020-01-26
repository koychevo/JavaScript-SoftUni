function solve(input) {
    let n = Number(input.shift());
    let numbers = "";
    for(let d1 = 1; d1 < 10; d1++) {
        for(let d2 = 1; d2 < 10; d2++) {
            for(let d3 = 1; d3 < 10; d3++) {
                for(let d4 = 1; d4 < 10; d4++) {
                    if(d1 + d2 === d3 + d4 && n % (d1 +d2) === 0) {
                        numbers += `${d1}${d2}${d3}${d4} `;
                    }
                }
            }
        }
    }
    console.log(numbers);
}

solve([3]);
solve([7]);
solve([24]);
