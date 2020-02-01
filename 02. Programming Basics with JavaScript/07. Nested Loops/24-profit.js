function solve(input) {
    let oneLev = Number(input.shift());
    let twoLev = Number(input.shift());
    let fiveLev = Number(input.shift());
    let sum = Number(input.shift());
    for(let i = 0; i <= oneLev; i++) {
        for(let j = 0; j <= twoLev; j++) {
            for(let k = 0; k <= fiveLev; k++) {
                if(i * 1 + j * 2 + k * 5 === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }    
    }
}

solve([3, 2, 3, 10]);
solve([5, 3, 1, 7]);
