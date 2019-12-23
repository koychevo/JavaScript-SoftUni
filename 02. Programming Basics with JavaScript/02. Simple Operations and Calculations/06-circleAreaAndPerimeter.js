function solve(input) {
    let r = parseFloat(input.shift());
    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

solve([3]);
solve([4.5]);