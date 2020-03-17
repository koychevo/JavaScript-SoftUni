function solve(num) {
    let decimalNum = 0;
    let length = num.length;
    for(let i = 0; i < length; i++) {
        decimalNum += Number(num[i]) * Math.pow(2, length - 1 - i);
    }
    console.log(decimalNum);
}

solve('00001001');
solve('11110000');

/*
Task: Write a function that reads an 8-bit binary number and converts it to a decimal.
The input comes as one string element, representing a binary number.
The output should be printed to the console.
*/
