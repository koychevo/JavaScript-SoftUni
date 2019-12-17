function solve([n]) {
    let firstRow = '', lastRow = '';
    for(let i = 1; i <= n; i++) {
        firstRow += '*';
        lastRow += '*';
    }
    console.log(firstRow);
    for(let i = 1; i <= n-2; i++) {
        let row = '*';
        for(let j = 1; j <= n-2; j++) {
            row += ' ';
        }
        row += "*";
        console.log(row);
    }
    console.log(lastRow);
}

solve([3]);
solve([4]);
solve([5]);
