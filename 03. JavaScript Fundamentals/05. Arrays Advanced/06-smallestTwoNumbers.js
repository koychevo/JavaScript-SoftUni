function solve(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[0] + ' ' + numbers[1];
}

console.log(solve([30, 15, 50, 5]));
console.log(solve([3, 0, 10, 4, 7, 3]));

/*
Task: Write a function that prints the two smallest elements from an array of numbers.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.
*/
