function printDates(input) {
    let pattern = /\b(?<day>\d{2})([\.\-/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let validDates = [];

    let validDate = pattern.exec(input);
    while(validDate !== null) {
        let date = validDate.groups;
        validDates.push(`Day: ${date['day']}, Month: ${date['month']}, Year: ${date['year']}`);
        validDate = pattern.exec(input);
    }
    return validDates.join('\n');
}

console.log(printDates('13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'));

/*
Task: Write a program, which matches a date in the format "dd{separator}MMM{separator}yyyy".
Compose the Regular Expression
Every valid date has the following characteristics:
•	Always starts with two digits, followed by a separator
•	After that, it has one uppercase and two lowercase letters (e.g. Jan, Mar).
•	After that, it has a separator and exactly 4 digits (for the year).
•	The separator could be either of three things: a period ("."), a hyphen ("-") or a forward slash ("/")
•	The separator needs to be the same for the whole date (e.g. 13.03.2016 is valid, 13.03/2016 is NOT). Use a group backreference to check for this.
You can follow the table below to help with composing your RegEx:
Match ALL of these	Match NONE of these
13/Jul/1928, 10-Nov-1934, 25.Dec.1937	01/Jan-1951, 23/sept/1973, 1/Feb/2016
Use named capturing groups for the day, month and year.
*/
