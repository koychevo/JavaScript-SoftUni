function solve(numOne, numTwo, numThree) {
    let result = 'Positive';

    if((numOne > 0 && numTwo > 0 && numThree < 0) || (numOne > 0 && numTwo < 0 && numThree > 0) || (numOne < 0 && numTwo > 0 && numThree > 0) || (numOne < 0 && numTwo < 0 && numThree < 0)) {
        result = 'Negative';
    }
    return result;
}


console.log(solve(5, 12, -15));
console.log(solve(-6, -12, 14));
console.log(solve(-1, -2, -3));
console.log(solve(-1, 0, 1));

/*
Task: You are given a function, that calculate the result of numOne * numTwo * numThree (the product) is negative or positive. 
Try to do this WITHOUT multiplying the 3 numbers.
The input comes as parameters named numOne, numTwo, numThree.
*/
