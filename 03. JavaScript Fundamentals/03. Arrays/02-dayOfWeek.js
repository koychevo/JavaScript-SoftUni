function solve(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let result = (day < 1 || day > 7) ? 'Invalid day!' : days[day - 1];
    console.log(result);
}

solve(3);
solve(6);
solve(11);

/* 
Task: Write a program which receives a number and prints the corresponding name of the day of week. 
If the number is NOT a valid day, print 'Invalid day!'.
*/
