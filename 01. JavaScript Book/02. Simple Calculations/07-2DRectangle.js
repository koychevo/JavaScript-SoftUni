function solve([arg1, arg2, arg3, arg4]) {
    let x1 = parseFloat(arg1);
    let y1 = parseFloat(arg2);
    let x2 = parseFloat(arg3);
    let y2 = parseFloat(arg4);
    let width = Math.abs(x1 - x2);
    let height = Math.abs(y1 - y2);
    console.log(width * height);
    console.log(2 * (width + height));
}

solve([60, 20, 10, 50]);
