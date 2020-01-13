function solve(input) {
    let num = input.shift();
    let sum = 0;
    while (num !== "Stop") {
        num = Number(num);
        sum += num;
        num = input.shift();
    }
    console.log(sum);
}

solve([10, 20, 30, 45, "Stop"]);