function solve(input) {
    let celsius = Number(input.shift());
    let fahrenheit = 1.8 * celsius + 32;
    console.log(fahrenheit.toFixed(2));
}

solve([25]);
solve([0]);
solve([-5.5]);
solve([32.3]);
