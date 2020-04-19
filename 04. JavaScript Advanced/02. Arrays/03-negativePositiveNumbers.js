function arrangeArray(input) {
    let result = [];
    input.forEach(item => {
        if(item >= 0) {
            result.push(item);
        } else {
            result.unshift(item);
        }
    });
    return result.join('\n');
}

console.log(arrangeArray([7, -2, 8, 9]));
console.log(arrangeArray([3, -2, 0, -1]));

/*
Task: Write a JS function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
The input comes as array of number elements.
The output is printed on the console, each element on a new line.
*/
