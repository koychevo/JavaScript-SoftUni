function printDay(day) {
    let dayToNumber;
    switch (day) {
        case 'Monday':
            dayToNumber = 1;
            break;
        case 'Tuesday':
            dayToNumber = 2;
            break;
        case 'Wednesday':
            dayToNumber = 3;
            break;
        case 'Thursday':
            dayToNumber = 4;
            break;
        case 'Friday':
            dayToNumber = 5;
            break;
        case 'Saturday':
            dayToNumber = 6;
            break;
        case 'Sunday':
            dayToNumber = 7;
            break;
        default:
            dayToNumber = 'error';
            break;
    }
    return dayToNumber;
}

console.log(printDay('Monday'));
console.log(printDay('Friday'));
console.log(printDay('Invalid'));

/*
Task: Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
The input comes as a single string argument.
The output should be returned as a result.
*/
