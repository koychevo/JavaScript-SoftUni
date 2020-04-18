function sumNumbers(n, m) {
    n = Number(n);
    m = Number(m);
    let firstNum = Math.min(n, m);
    let secondNum = Math.max(n, m);
    let sum = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumNumbers('1', '5' ));
console.log(sumNumbers('-8', '20'));

/*
Task: Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
The input comes as two string elements that need to be parsed as numbers.
The output should return the sum.
*/
