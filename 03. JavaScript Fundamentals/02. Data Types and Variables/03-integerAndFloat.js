function solve(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;
    let sumType = sum === parseInt(sum) ? 'Integer' : 'Float';
    console.log(`${sum} - ${sumType}`);
}

solve(9, 100, 1.1);
solve(100, 200, 303);

/*
Task: You will receive 3 numbers. Your task is to find their sum and print it to the console with the addition 
" - {type of the number (Integer or Float)}":
*/