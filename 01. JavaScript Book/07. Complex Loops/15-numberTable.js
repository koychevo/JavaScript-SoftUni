function solve(input) {
    let n = Number(input.shift());
    for(let i = 0; i < n; i++) {
        let line = "";
        for(let j = 0; j < n; j++) {
            let num = i + j + 1;
            if(num > n) {
                num = 2 * n - num; 
            }
            line += `${num} `;
        }
        console.log(line);
    }
}

solve([3]);
solve([4]);
