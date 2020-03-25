function solve(numbers, sum) {
    for(let i = 0; i < numbers.length -1; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === sum) {
                console.log(`${numbers[i]} ${numbers[j]}`);
            }
        }
    }
}

solve([1, 7, 6, 2, 19, 23], 8);
solve([14, 20, 60, 13, 7, 19, 8], 27);
solve([1, 2, 3, 4, 5, 6], 6);

/*
Task: Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number. 
*/
