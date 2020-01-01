function solve(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());
    let onBorderLeft = (x === x1) && (y >= y1) && (y <= y2);
    let onBorderRight = (x === x2) && (y >= y1) && (y <= y2);
    let onBorderTop = (y ===y2) && (x >= x1) && (x <= x2);
    let onBorderBottom = (y ===y1) && (x >= x1) && (x <= x2);
    if(onBorderLeft || onBorderTop || onBorderRight || onBorderBottom) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}

solve([2, -3, 12, 3, 12, -1]);
solve([2, -3, 12, 3, 8, -1]);
