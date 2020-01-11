function solve(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());
    let onBorderRightLeft = (x == x1 || x == x2) && (y >= y1 && y <= y2);
    let onBorderTopBottom = (y == y1 || y == y2) && (x >= x1 && x <= x2);
    let result = "";
    if(onBorderRightLeft || onBorderTopBottom) {
        result = "Border";
    } else {
        result = "Inside / Outside";
    }
    console.log(result);
}

solve([2, -3, 12, 3, 8, -1]);
solve([2, -3, 12, 3, 12, -1]);
