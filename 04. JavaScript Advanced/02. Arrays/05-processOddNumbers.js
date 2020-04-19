function printNumbers(numbers) {
    let result = [];
    numbers.forEach((item, index) => {
        if(index % 2 !== 0) {
            result.unshift(2 * item);
        }
    });
    return result.join(' ');
}

console.log(printNumbers([10, 15, 20, 25]));
console.log(printNumbers([3, 0, 10, 4, 7, 3]));

/*
Task: You are given an array of numbers. Write a JS function that prints the elements at odd positions from the array, doubled and in reverse order.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.
*/
