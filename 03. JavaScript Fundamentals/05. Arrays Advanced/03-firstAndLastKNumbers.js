function solve(numbers) {
    let k = numbers.shift();
    let firstNums = lastNums = '';
    for(let i = 0; i < k; i++) {
        firstNums += numbers[i] + ' ';
        lastNums += numbers[numbers.length - k + i] + ' ';
    }
    console.log(firstNums);
    console.log(lastNums);
}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);

/*
Task: Write a function that prints the first k and the last k elements from an array of numbers.
The input comes as array of number elements. The first element represents the number k, all other elements are from the array that needs to be processed.
The output is printed on the console on two lines. On the first line print the first k elements, separated by space. On the second line print the last k elements, separated by space.
*/
