function printNumbers(start, end) {
    let firstNum = Number(start);
    let lastNum = Number(end);
    let sum = 0;
    let numbers = "";
    for(let i = firstNum; i <= lastNum; i++) {
        numbers += `${i} `;
        sum += i;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

printNumbers(5, 10);
printNumbers(0, 26);
printNumbers(50, 60);

/*
Task: Write a function to display numbers from given start to given end and their sum. The input comes as two number parameters.
*/
