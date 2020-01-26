function solve(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let result = "";
    for(let s1 = 1; s1 <= n; s1++) {
        for(let s2 = 1; s2 <= n; s2++) {
            for(let s3 = 97; s3 < 97 + l; s3++) {
                for(let s4 = 97; s4 < 97 + l; s4++) {
                    for(let s5 = Math.max(s1, s2) +1; s5 <= n; s5++) {
                        result += `${s1}${s2}${String.fromCharCode(s3)}${String.fromCharCode(s4)}${s5} `;
                    }
                }
            }
        }    
    }
    console.log(result);
}

solve([2, 4]);
solve([3, 1]);
solve([3, 2]);
solve([4, 2]);
