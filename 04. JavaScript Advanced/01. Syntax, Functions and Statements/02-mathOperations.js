function calculate(firstNum, secondNum, operation) {
    let result;
    switch (operation) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        case '%':
            result = firstNum % secondNum;
            break;
        case '**':
            result = firstNum ** secondNum;
            break;
    }
    return result;
}

console.log(calculate(5, 6, '+'));
console.log(calculate(3, 5.5, '*'));

/*
Task: Write a JS function that takes two numbers and a string as an input. 

The string may be one of the following: '+', '-', '*', '/', '%', '**'.  

Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
The input comes as two numbers and a string argument passed to your function.
The output should be printed on the console.
*/
