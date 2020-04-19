function findMinNumbers(numbers) {
    return numbers.sort((a, b) => a - b).slice(0, 2).join(' ');
}

console.log(findMinNumbers([30, 15, 50, 5]));
console.log(findMinNumbers([3, 0, 10, 4, 7, 3]));

/*
Task: Write a function that prints the two smallest elements from an array of numbers.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.
*/
