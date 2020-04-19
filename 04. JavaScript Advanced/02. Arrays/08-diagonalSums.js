function calculateDiagonals(numbers) {
    let firstSum = secondSum = 0;
    for(let i = 0; i < numbers.length; i++) {
        for(j = 0; j < numbers.length; j++) {
            if(i === j) {
                firstSum += numbers[i][j];
            }
            if(i === numbers.length - 1 - j) {
                secondSum += numbers[i][j]
            }
        }
    }
    return `${firstSum} ${secondSum}`;
}

console.log(calculateDiagonals([[20, 40], [10, 60]]));
console.log(calculateDiagonals([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]));

/*
Task: A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). Write a function that finds the sum at the main and at the secondary diagonals.
The input comes as array of arrays, containing number elements (2D matrix of numbers).
The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.
*/
