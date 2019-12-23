function solve(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let length = Math.abs(x1 -x2);
    let width = Math.abs(y1 - y2);
    let area = length * width;
    let perimeter = 2 * (length + width);
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

solve([60, 20, 10, 50]);
solve([30, 40, 70, -10]);
solve([600.25, 500.75, 100.50, -200.5]);
