function solve(input) {
    let n = Number(input.shift());
    let password = "";
    let counter = 0;
    let result = "";
    for(let d1 = 1; d1 < 10; d1++) {
        for(let d2 = d1 + 1; d2 < 10; d2++) {
            for(let d3 = 2; d3 < 10; d3++) {
                for(let d4 = 1; d4 < d3; d4++) {
                    if(d1 * d2 + d3 * d4 === n) {
                        counter++;
                        result += `${d1}${d2}${d3}${d4} `;
                        if(counter === 4) {
                            password = `${d1}${d2}${d3}${d4}`;
                        }
                    }
                    
                }
            }
        }    
    }
    if(password) {
        result += `\nPassword: ${password}`;
    } else {
        result += "\nNo!";
    }
    console.log(result);
}

solve([11]);
solve([139]);
solve([110]);
