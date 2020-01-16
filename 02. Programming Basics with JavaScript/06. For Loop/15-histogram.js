function solve(input){
    let n = Number(input.shift());
    let p1Counter = p2Counter = p3Counter = p4Counter = p5Counter = 0; 
    for(let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (num < 200) {
            p1Counter++;
        } else if (num < 400) {
            p2Counter++;
        } else if (num < 600) {
            p3Counter++;
        } else if (num < 800) {
            p4Counter++;
        } else {
            p5Counter++;
        }
    }
    console.log(`${(p1Counter / n * 100).toFixed(2)}%`);
    console.log(`${(p2Counter / n * 100).toFixed(2)}%`);
    console.log(`${(p3Counter / n * 100).toFixed(2)}%`);
    console.log(`${(p4Counter / n * 100).toFixed(2)}%`);
    console.log(`${(p5Counter / n * 100).toFixed(2)}%`);
}

solve([3, 1, 2, 999]);
solve([4, 53, 7, 56, 999]);
solve([7, 800, 801, 250, 199, 399, 599, 799]);
solve([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);
solve([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]);
