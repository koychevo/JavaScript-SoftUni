function solve(numbers) {
    let result = '';
    for(let i = numbers.length - 1; i >= 0; i--) {
        if(i % 2 !== 0) {
            result += `${numbers[i] * 2} `;
        }
    }
    return result;
}

/*
function solve(numbers) {
    let filteredArr = numbers.filter((el, i) => i % 2 !== 0).map(el => el * 2);
    let resultArr = [];
    for(let i = 0; i < filteredArr.length; i++) {
        resultArr[i] = filteredArr[filteredArr.length - 1 - i];
    }
    return resultArr.join(' ');
}
*/

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));

/*
Task: You are given an array of numbers. Write a function that prints the elements at odd positions from the array, doubled and in reverse order.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.
*/
