function calculate(numOne, numTwo, operator) {
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    let result = '';
    
    switch (operator) {
        case 'multiply':
            result = multiply(numOne, numTwo);
            break;
        case 'divide':
            result = divide(numOne, numTwo);
            break;
        case 'add':
            result = add(numOne, numTwo);
            break;
        case 'subtract':
            result = subtract(numOne, numTwo);
            break;
    }
    return result;
}

console.log(calculate(5, 5, 'multiply'));
console.log(calculate(40, 8, 'divide'));
console.log(calculate(12, 19, 'add'));
console.log(calculate(50, 13, 'subtract'));

/*
Task: Write a function that receives three parameters and write an arrow function that calculate result depending of operator. Operator can be 'multiply', 'divide', 'add', 'subtract'. 
Input
The input comes as parameters named numOne, numTwo, operator.
*/
