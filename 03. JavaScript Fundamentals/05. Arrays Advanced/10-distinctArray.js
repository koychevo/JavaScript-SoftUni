function solve(inputNumbers) {
    let numbers = [];
    for(let num of inputNumbers) {
        if(numbers.indexOf(num) === -1) {
            numbers.push(num);
        }
    }
    
    return numbers.join(' ');
}

console.log(solve([1, 2, 3, 4]));
console.log(solve([7, 8, 9, 7, 2, 3, 4, 1, 2]));
console.log(solve([20, 8, 12, 13, 4, 4, 8, 5]));

/* 
Task: You will be given an array of integer numbers on the first line of the input (space-separated). 
Remove all repeating elements from the array. 
Print the result elements separated by single space.
*/
