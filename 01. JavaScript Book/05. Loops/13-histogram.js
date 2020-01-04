function solve(input) {
    let n = Number(input[0]);
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;
    for(let i = 1; i <= n; i++) {
        if(input[i] < 200) {
            p1Count++;
        } else if(input[i] < 400) {
            p2Count++;
        } else if(input[i] < 600) {
            p3Count++;
        } else if(input[i] < 800) {
            p4Count++;
        } else {
            p5Count++;
        }
    }
    console.log(`${(p1Count / n * 100).toFixed(2)}%`);
    console.log(`${(p2Count / n * 100).toFixed(2)}%`);
    console.log(`${(p3Count / n * 100).toFixed(2)}%`);
    console.log(`${(p4Count / n * 100).toFixed(2)}%`);
    console.log(`${(p5Count / n * 100).toFixed(2)}%`);
}

solve([3, 1, 2, 999]);
solve([4, 53, 7, 56, 999]);
solve([7, 800, 801, 250, 199, 399, 599, 799]);
