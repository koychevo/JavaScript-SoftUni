function solve(input) {
    let sorted = input.slice(0).sort((a, b) => b - a);
    let result = [];
    let index = 0;
    while(sorted.length > 0) {
        result[index++] = sorted.shift();
        result[index++] = sorted.pop();
    }
    return result.join(' ');
}

console.log(solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));

/*
Task: Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, the fourth is the second smallest one and so on. 
Print the elements on one row, separated by single space.
*/
