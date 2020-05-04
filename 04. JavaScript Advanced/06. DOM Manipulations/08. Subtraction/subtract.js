function subtract() {
    let firstNum  = Number(document.getElementById('firstNumber').value);
    let secondNum  = Number(document.getElementById('secondNumber').value);
    let result = firstNum - secondNum;
    document.getElementById('result').textContent = result;
} 


/*
Task: An HTML page holds two text fields with ids "firstNumber" and "secondNumber". Write a function to subtract the values from these text fields and display the result in the div named "result".
*/
