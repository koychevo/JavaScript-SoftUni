function solve(input) {
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let row = ((i === 0) || (i === n - 1)) ? "+" : "|";
        for (let j = 1; j < n - 1; j++) {
            row += " -";
        }
        row += ((i === 0) || (i === n - 1)) ? " +" : " |";
        console.log(row);
    }
}

solve([4]);
solve([5]);
solve([6]);
