function solve(input) {
    let n = parseInt(input.shift());
    let firstNumber = secondNumber = 1;
    for(let i = 2; i <= n; i ++) {
        let nextNum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextNum;
    }
    console.log(secondNumber);
}

solve([10]);
solve([5]);
solve([20]);
solve([0]);
solve([1]);
