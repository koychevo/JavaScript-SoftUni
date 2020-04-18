function findLargestNum(num1, num2, num3) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    if(num1 > num2 && num1 > num3) {
        maxNum = num1;
    } else if(num2 > num1 && num2 > num3) {
        maxNum = num2;
    } else if(num3 > num2 && num3 > num1) {
        maxNum = num3;
    }
    console.log(`The largest number is ${maxNum}.`);
}

findLargestNum(5, -3, 16);
findLargestNum(-3, -5, -22.5);

/*
Task: Write a function that takes three number arguments as an input and find the largest of them. Print the following text on the console:  'The largest number is {number}.'.
The input comes as three number arguments passed to your function.
The output should be printed to the console.
*/
