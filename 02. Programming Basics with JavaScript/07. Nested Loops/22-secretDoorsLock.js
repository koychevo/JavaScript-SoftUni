function solve(input) {
    let d1Limit = Number(input.shift());
    let d2Limit = Number(input.shift());
    let d3Limit = Number(input.shift());
    for(let d1 = 2; d1 <= d1Limit; d1+=2) {
        for(let d2 = 2; d2 <= d2Limit; d2++) {
            let isPrime = true;
            for(let i = 2; i <= Math.sqrt(d2); i++) {
                if(d2 % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if(!isPrime) {
                continue;
            }
            for(let d3 = 2; d3 <= d3Limit; d3+=2) {
                console.log(`${d1} ${d2} ${d3}`);
            }
        }    
    }
}

solve([3, 5, 5]);
solve([8, 2, 8]);
