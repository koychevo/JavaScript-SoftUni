function sum(numbers) {
    let firstNum = Number(numbers[0]);
    let lastNum = Number(numbers[numbers.length-1]);
    return firstNum + lastNum;
}

console.log(sum(['20', '30', '40']));
console.log(sum(['5', '10']));

/*
Task: Write a function that calculates and prints the sum of the first and the last elements in an array.
The input comes as array of string elements holding numbers.
The output is the return value of your function.
*/
