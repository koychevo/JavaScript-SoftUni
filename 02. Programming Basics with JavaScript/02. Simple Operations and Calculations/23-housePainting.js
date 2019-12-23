function solve(input) {
    let x = Number(input.shift());
    let y = Number(input.shift());
    let h = Number(input.shift());
    let roof = 2 * (x * y + x * h / 2);
    let redDye =roof / 4.3;
    let walls = 2 * (x * y + x * x - 1.5 * 1.5) - 2 * 1.2;
    let greenDye = walls / 3.4;
    console.log(greenDye.toFixed(2));
    console.log(redDye.toFixed(2))
}

solve([6, 10, 5.2]);
solve([10.25, 15.45, 8.88]);
