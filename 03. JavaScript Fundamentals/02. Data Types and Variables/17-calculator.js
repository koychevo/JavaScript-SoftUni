function calculator(firstNum, opp, secondNum) {
    let result = ''
    switch (opp) {
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
    }
    console.log(result.toFixed(2));
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);

/*
Task: Write a function that receives 3 parameters: a number, an operator (string) and another number. Print the result of the calculation on the console formatted to the second decimal point
*/
