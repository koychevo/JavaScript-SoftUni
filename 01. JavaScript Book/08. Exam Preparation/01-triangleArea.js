function solve(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x3 = Number(input.shift());
    let y3 = Number(input.shift());
    let s = Math.abs(x2 - x3) * Math.abs(y1 - y3) / 2;
    console.log(s);
}

solve([5, -2, 6, 1, 1, 1]);
solve([4, 1, -1, -3, 3, -3]);
