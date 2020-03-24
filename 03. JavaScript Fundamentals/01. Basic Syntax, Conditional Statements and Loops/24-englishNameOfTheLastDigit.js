function lastDigit(number) {
    let num = Number(number);
    let digit = num % 10;
    let englishDigit = "";
    switch (digit) {
        case 1:
            englishDigit = "one";
            break;
        case 2:
            englishDigit = "two";
            break;
        case 3:
            englishDigit = "three";
            break;
        case 4:
            englishDigit = "four";
            break;
        case 5:
            englishDigit = "five";
            break;
        case 6:
            englishDigit = "six";
            break;
        case 7:
            englishDigit = "seven";
            break;
        case 8:
            englishDigit = "eight";
            break;
        case 9:
            englishDigit = "nine";
            break;
        default:
            englishDigit = "zero";
            break;
    }
    console.log(englishDigit);
}

lastDigit(512);
lastDigit(1);
lastDigit(1643);

/*
Task: Write a function that returns the English name of the last digit of a given number. Write a program that receives a number and prints the returned value from this function.
*/
