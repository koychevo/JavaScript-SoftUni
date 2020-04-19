function findNeighbors(elements) {
    let count = 0;
    for(let i = 0; i < elements.length; i++) {
        let line = elements[i];
        for(let j = 0; j < line.length; j++) {
            if((j !== line.length - 1 && elements[i][j] === elements[i][j+1]) || (i !== elements.length - 1 && elements[i][j] === elements[i+1][j])) {
                count++;
            }
        }
    }
    return count;
}

console.log(findNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));
console.log(findNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));
console.log(findNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));

/*
Task: Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
The input comes as array of arrays, containing string elements (2D matrix of strings).
The output is return value of you function. Save the number of equal pairs you find and return it.
*/
