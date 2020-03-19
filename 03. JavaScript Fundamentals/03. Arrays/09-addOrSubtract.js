function solve(numbers) {
    let originalSum = modifiedSum = 0;
    for(let i = 0; i < numbers.length; i++) {
        originalSum += numbers[i];
        numbers[i] = (numbers[i] % 2 === 0) ? numbers[i] + i : numbers[i] - i;
        modifiedSum += numbers[i];
    }
    console.log(numbers);
    console.log(originalSum);
    console.log(modifiedSum);
}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);

/*
Task: Write a function, which changes the value of odd and even numbers in an array of numbers. 
•	If the number is even - add to its value its index position
•	If the number is odd - subtract to its value its index position
Output
On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.
*/
