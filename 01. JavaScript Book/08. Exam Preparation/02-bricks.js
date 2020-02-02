function solve(input) {
    let x = Number(input.shift());
    let w = Number(input.shift());
    let m = Number(input.shift());
    console.log(Math.ceil(x / (w * m)));
}

solve([120, 2, 30]);
solve([355, 3, 10]);
solve([5, 12, 30]);
