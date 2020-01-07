function solve(input) {
    let n = Number(input.shift());
    let factorial = 1;
    do {
        factorial *= n;
        n--;
    } while(n > 1);
    console.log(factorial)
}

solve([5]);
