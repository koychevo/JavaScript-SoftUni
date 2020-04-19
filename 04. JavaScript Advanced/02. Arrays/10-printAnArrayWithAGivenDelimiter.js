function printArray(arr) {
    let delimeter = arr.pop();
    return arr.join(delimeter);
}

console.log(printArray(['One', 'Two', 'Three', 'Four', 'Five', '-']));
console.log(printArray(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));

/*
Task: The input comes as an array of strings. The last element of the array is the delimiter.
The output is the same array, printed on the console, each element separated from the others by the given delimiter.
*/
