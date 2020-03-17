function solve(a, b, c) {
    let maxNum = a;
    maxNum = b > maxNum ? b : maxNum;
    maxNum = c > maxNum ? c : maxNum;
    console.log(maxNum);
}

solve(-2, 7, 3);
solve(130, 5, 99);
solve(43, 43.2, 43.1);

/*
Task: Write a function that finds the biggest of 3 numbers.
The input comes as 3 parameters.
The output is the biggest from the input numbers.
*/
