function leapYear(year) {
    let result = "no";
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result = "yes";
    }
    console.log(result);
}

leapYear(1984);
leapYear(2003);
leapYear(4);

/* 
Task: Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400.
*/
