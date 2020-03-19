function solve(numbers, rotations) {
    while(rotations > 0) {
        let num = numbers[0];
        for(let i = 0; i < numbers.length - 1; i++) {
            numbers[i] = numbers[i+1];
        }
        numbers[numbers.length-1] = num;
        rotations--;
    }
    console.log(numbers.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);

/*
Task: Write a function that receives an array and number of rotations you have to perform (first element goes at the end). 
Output
Print the resulting array elements separated my single space.
*/
