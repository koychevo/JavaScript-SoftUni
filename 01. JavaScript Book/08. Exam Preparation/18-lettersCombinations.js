function solve(input) {
    let start = input.shift().charCodeAt();
    let end = input.shift().charCodeAt();
    let ex = input.shift().charCodeAt();
    let counter = 0;
    let result = "";
    for(let l1 = start; l1 <= end; l1++) {
        for(let l2 = start; l2 <= end; l2++) {
            for(let l3 = start; l3 <= end; l3++) {
                if(l1 !== ex && l2 !== ex && l3 !== ex) {
                    counter++;
                    result += `${String.fromCharCode(l1)}${String.fromCharCode(l2)}${String.fromCharCode(l3)} `;
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
