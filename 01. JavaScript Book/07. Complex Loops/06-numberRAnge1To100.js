function solve(input) {
    let i = 0;
    let num = Number(input[i]);
    while (num < 1 || num > 100) {
        console.log("Invalid number!");
        i++;
        num = Number(input[i]);
    }
    console.log(`The number is: ${num}`);
}

solve([200, 342, 23, 4]);
