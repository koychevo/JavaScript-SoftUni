function solve(input) {
    let n = Number(input.shift());
    let p1Counter = p2Counter = p3Counter = 0;
    for(let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if(num % 2 === 0) {
            p1Counter++;
        }
        if(num % 3 === 0) {
            p2Counter++;
        }
        if(num % 4 === 0) {
            p3Counter++;
        }
    }
    console.log(`${(p1Counter / n * 100).toFixed(2)}%`);
    console.log(`${(p2Counter / n * 100).toFixed(2)}%`);
    console.log(`${(p3Counter / n * 100).toFixed(2)}%`);
}

solve([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);
solve([3, 3, 6, 9]);
