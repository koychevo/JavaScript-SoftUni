function solve(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

solve(2020, 2, 29);

/*
Task: Write a JS function that calculates the date of the next day by given year, month and day.
The input comes as three number parameters. The first element is the year, the second is the month and the third is the day.
The output should be returned as a result of your function.
Examples
Input	Output
2016, 9, 30	2016-10-1
Hints
•	Use Date()
*/
