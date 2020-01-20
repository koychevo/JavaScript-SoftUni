function solve(input) {
    let n = parseInt(input.shift());
    let num = 1;
    for(let i = 1; i <= n; i++) {
        let row = "";
        for(let j = 1; j <= i; j++) {
            if(num > n) {
                i = n + 1;
                break;
            }
            row += `${num} `;   
            num++;
        }
        console.log(row);
    }
}

solve([7]);
solve([5]);
solve([10]);
