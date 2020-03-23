function solve(numOne, numTwo, numThree) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let result = subtract(sum(numOne, numTwo), numThree);
    return result;
}

console.log(solve(23, 6, 10));
console.log(solve(1, 17, 30));
console.log(solve(42, 58, 100));

/*
Task: You will receive three integer numbers. 
Write a function sum() to get the sum of the first two integers and subtract() function that subtracts the third integer from the result.
*/
