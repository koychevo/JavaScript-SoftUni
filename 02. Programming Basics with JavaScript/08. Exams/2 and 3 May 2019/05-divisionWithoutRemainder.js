function solve(input) {
    let n = Number(input.shift());
    let p1Count = p2Count = p3Count = 0;
    for(let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if(num % 2 === 0) {
            p1Count++;
        }
        if(num % 3 === 0) {
            p2Count++;
        }
        if(num % 4 === 0) {
            p3Count++;
        }
    }
    console.log(`${(p1Count / n * 100).toFixed(2)}%`);
    console.log(`${(p2Count / n * 100).toFixed(2)}%`);
    console.log(`${(p3Count / n * 100).toFixed(2)}%`);
}

solve([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);
solve([3, 3, 6, 9]);
