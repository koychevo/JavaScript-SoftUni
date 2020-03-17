function solve(digit) {
    let result = 0;
    switch (digit) {
        case 'one':
            result = 1;
            break;
        case 'two':
            result = 2;
            break;
        case 'three':
            result = 3;
            break;
        case 'four':
            result = 4;
            break;
        case 'five':
            result = 5;
            break;
        case 'six':
            result = 6;
            break;
        case 'seven':
            result = 7;
            break;
        case 'eight':
            result = 8;
            break;
        case 'nine':
            result = 9;
            break;
        default:
            result = 0;
            break;
    }
    console.log(result);
}

solve('nine');
solve('two');
solve('zero');

/*
Task: Write a function that receives a digit in the form of a word as string and prints the digit as a number.
*/
