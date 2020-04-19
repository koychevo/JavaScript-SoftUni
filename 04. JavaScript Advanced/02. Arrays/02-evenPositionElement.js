function printEvenPositions(input) {
    let evenPositionsElements = input.filter((el, index) => index % 2 === 0);
    return evenPositionsElements.join(' ');
}

console.log(printEvenPositions(['20', '30', '40']));
console.log(printEvenPositions(['5', '10']));

/*
Task: Write a function that finds the elements at even positions in an array.
The input comes as array of string elements.
The output is the return value of your function. Collect all elements in a string, separated by space.
*/
