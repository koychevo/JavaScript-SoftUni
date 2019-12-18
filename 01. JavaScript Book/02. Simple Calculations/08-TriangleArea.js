function solve([arg1, arg2]) {
    let a = parseFloat(arg1);
    let h = parseFloat(arg2);
    let area = a * h / 2;
    console.log(`Triangle area = ${area.toFixed(2)}`)
}

solve([20, 30]);
solve([15, 35]);
solve([7.75, 8.45]);