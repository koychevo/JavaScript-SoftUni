function solve(input) {
    let isSame = true;
    let sum = 0;
    let num = Number(input);
    let previousDigit = '';
    while(num > 0) {
        let digit = num % 10;
        if(typeof previousDigit === 'number' && digit !== previousDigit) {
            isSame = false;
        }
        sum += digit;
        previousDigit = digit;
        num = Math.floor(num / 10);
    }
    console.log(isSame);
    console.log(sum);
}


solve(2222222);
solve(1234);

/*
Task: Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
Print on the console true if all numbers are same and false if not. On the next line print the sum of all the digits.
The input comes as an integer number.
The output should be printed on the console.
*/
