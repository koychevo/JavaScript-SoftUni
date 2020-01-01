function solve(input) {
    let h = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());
    let onBorderBottom = (y === 0) && (x >= 0) && (x <= 3 * h);
    let onLeftBorder = ((x === 0) && (y >= 0) && (y <= h)) || ((x === h) && (y >= h) && (y <= 4 * h));
    let onBorderTop = ((y === h) && (((x >= 0) && (x <= h)) || ((x >= 2 * h) && (x <= 3 * h)))) || ((y === 4 * h) && (x >= h) && (x <= 2 * h));
    let onBorderRight = ((x === 2 * h) && (y >= h) && (y <= 4 * h)) || ((x === 3 * h) && (y >= 0) && (y <= h));
    let outside = (((x < h) || (x > 2 *h)) && (y > h)) || (y > 4 * h);
    if(outside) {
        console.log("outside");
    } else if (onBorderBottom || onLeftBorder || onBorderTop || onBorderRight) {
        console.log("border");
    } else {
        console.log("inside");
    }
}

solve([2, 3, 10]);
solve([2, 3, 1]);
solve([2, 2, 2]);
solve([2, 6, 0]);
solve([2, 0, 6]);
solve([15, 13, 55]);
solve([15, 29, 37]);
solve([15, 37, 18]);
solve([15, -4, 7]);
solve([15, 30, 0]);
