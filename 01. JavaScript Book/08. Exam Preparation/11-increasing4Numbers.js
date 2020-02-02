function solve(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let result = "";
    for(let n1 = a; n1 <= b - 3; n1++) {
        for(let n2 = n1 + 1; n2 <= b - 2; n2++) {
            for(let n3 = n2 + 1; n3 <= b - 1; n3++) {
                for(let n4 = n3 + 1; n4 <= b; n4++) {
                    if(n1 < n2 && n2 < n3 && n3 < n4) {
                        result += `${n1} ${n2} ${n3} ${n4}\n`;
                    }
                }
            }
        }    
    }
    if(!result) {
        result = "No";
    }
    console.log(result);
}

solve([3, 7]);
solve([5, 7]);
solve([10, 13]);
