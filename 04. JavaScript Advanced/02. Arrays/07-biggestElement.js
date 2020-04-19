function findMaxNumber(numbers) {
    let allNums = [];
    for(let item of numbers) {
        allNums = allNums.concat(item);
    }
    return allNums.reduce((a, b) => a > b ? a : b, Number.MIN_SAFE_INTEGER);
}

console.log(findMaxNumber([[20, 50, 10], [8, 33, 145]]));
console.log(findMaxNumber([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));

/*
Task: Write a function that finds the biggest element inside a matrix.
The input comes as array of arrays, containing number elements (2D matrix of numbers).
The output is the return value of your function. Find the biggest element and return it.
*/
