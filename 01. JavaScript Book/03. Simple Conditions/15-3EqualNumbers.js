function solve(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let num3 = Number(input.shift());
    if(num1 === num2 && num2 === num3) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

solve([5, 5, 5]);
solve([5, 4, 5]);
solve([1, 2, 3]);
solve([12, 12, 12]);
