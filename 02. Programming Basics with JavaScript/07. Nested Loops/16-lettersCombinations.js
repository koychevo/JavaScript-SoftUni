function solve(input) {
    let counter = 0;
    let result = "";
    let firstL = input.shift().charCodeAt(0);
    let secondL = input.shift().charCodeAt(0);
    let exL = input.shift().charCodeAt(0);
    for(let l1 = firstL; l1 <= secondL; l1++) {
        for(let l2 = firstL; l2 <= secondL; l2++) {
            for(let l3 = firstL; l3 <= secondL; l3++) {
                if(l1 !== exL && l2 !== exL && l3 !== exL) {
                    result += `${String.fromCharCode(l1)}${String.fromCharCode(l2)}${String.fromCharCode(l3)} `;
                    counter++;
                }
            }
        }    
    }
    result += counter;
    console.log(result);
}

solve(["a", "c", "b"]);
solve(["f", "k", "h"]);
solve(["a", "c", "z"]);
