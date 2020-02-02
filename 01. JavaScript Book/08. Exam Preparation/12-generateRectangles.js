function solve(input) {
    let n = Number(input.shift());
    let m = Number(input.shift());
    let counter = 0;

    for(let x1 = -n; x1 <= n; x1++) {
        for(let x2 = x1 + 1; x2 <= n; x2++) {
            for(let y1 = -n; y1 <= n; y1++) {
                for(let y2 = y1 + 1; y2 <= n; y2++) {
                    let area = (x2 - x1) * (y2 - y1);
                    if(area >= m) {
                        console.log(`(${x1}, ${y1}) (${x2}, ${y2}) -> ${area}`);
                        counter++;
                    }
                }
            }
        }    
    }    
    if(counter === 0) {
        console.log("No");
    }
}

solve([1, 2]);
solve([2, 17]);