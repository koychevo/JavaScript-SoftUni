function solve(input) {
    let n = Number(input.shift());
    let number = 0;
    for(let row = 1; row <= n; row++) {
        let line = "";
        for(let col = 0; col < row; col++) {
            number++;
            if(number > n) {
                row = n + 1;
                break;
            }
            line += `${number} `;
        }
        console.log(line);
    }
}

solve([7]);
solve([10]);
solve([12]);
solve([15]);