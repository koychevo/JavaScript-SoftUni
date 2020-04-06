function solve(firstArr, secondArr) {
    let numbers = firstArr.slice(0, secondArr[0]);
    numbers.splice(0, secondArr[1]);
    let counter = 0;
    let num = secondArr[2];

    for(let number of numbers) {
        if(number === num) {
            counter++;
        }
    }
    return `Number ${num} occurs ${counter} times.`;
}

console.log(solve([5, 2, 3, 4, 1, 6], [5, 2, 3]));

/*
Task: You will receive two arrays of integers. The second array is contains exactly three numbers. 
First number represents the number of elements you have to take from the first array (starting from the first one).
Second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
Third number is the number we search in our collection after the manipulations. 
As output print how many times that number occurs in our array in the following format: 
"Number {number} occurs {count} times."
*/
