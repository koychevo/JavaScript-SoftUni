function solve(input) {
    let men = Number(input.shift());
    let women = Number(input.shift());
    let tables = Number(input.shift());
    let result = "";
    for(let i = 1; i <= men; i++) {
        for(let j = 1; j <= women; j++) {
            if(tables < 1) {
                i = men + 1;
                break;
            }
            result += `(${i} <-> ${j}) `;
            tables--;
        }    
    }
    console.log(result);
}

solve([2, 2, 6]);
solve([2, 2, 3]);
solve([5, 8, 40]);
