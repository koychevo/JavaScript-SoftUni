function solve(number) {
    let sum = 0;
    let num = number;
    while(num > 0) {
        sum += num % 10;
        num = Math.trunc(num / 10);
    }
    let isAmazing = sum.toString().includes('9') ? 'True' : 'False';
    console.log(`${number} Amazing? ${isAmazing}`);
}

solve(1233);
solve(999);

/*
Task: Write a function which as input will receive  a number.
 Check and print if it is amazing or not into the following format: 
	"{number} Amazing? {result}"
An amazing number is one that includes the digit 9 the sum of its digits. 
Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)
Hints
Use includes()
*/