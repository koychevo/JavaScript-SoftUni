function solve(numOne, numTwo, numThree) {
    let minNum = numOne;
    minNum = (numTwo < minNum) ? numTwo : minNum;
    minNum = (numThree < minNum) ? numThree : minNum;
    return minNum;
}

console.log(solve(2, 5, 3));
console.log(solve(600, 342, 123));
console.log(solve(25, 21, 4));

/*
Task: Write a function which receives three integer numbers to print the smallest. Use appropriate name for the function.
*/
