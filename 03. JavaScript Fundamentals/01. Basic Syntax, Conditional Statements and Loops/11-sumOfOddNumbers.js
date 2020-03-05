function printOddNumbers(n) {
    let sum = 0;
    let number = 1;
    while(n > 0) {
        if(number % 2 !== 0) {
            sum += number;
            console.log(number);
            n--;
        }
        number++;
    }
    console.log(`Sum: ${sum}`);
}

printOddNumbers(5);
printOddNumbers(3);

/*
Task: Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
*/
