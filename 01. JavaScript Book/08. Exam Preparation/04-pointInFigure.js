function solve(input) {
    let x = Number(input.shift());
    let y = Number(input.shift());
    let inFirstRectangle = (1 <= x) && (x <= 12) && (-3 <= y) && (y <= 1);
    let inSecondRectangle = (4 <= x) && (x <= 10) && (-5 <= y) && (y <= 3);
    let result= (inFirstRectangle || inSecondRectangle) ? "in" : "out";
    console.log(result);
}

solve([8, -5]);
solve([6, -3]);
solve([11, -5]);
solve([11, 2]);
