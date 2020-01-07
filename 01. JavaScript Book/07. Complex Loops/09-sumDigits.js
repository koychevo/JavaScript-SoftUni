function solve(input) {
    let num = Number(input.shift());
    let sum = 0;
    do {
        sum += num % 10;
        num = Math.floor(num / 10);
    } while (num > 0);
    console.log(sum);
}

solve([1234]);
solve([5634]);
