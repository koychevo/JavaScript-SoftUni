function solve(firstArr, secondArr) {
    let bomb = secondArr[0];
    let power = secondArr[1];
    let numbers = firstArr.slice(0);
    while(numbers.includes(bomb)) {
        let bombIndex = numbers.indexOf(bomb);
        let startIndex = Math.max(0, bombIndex - power);
        numbers.splice(bombIndex, power + 1);
        numbers.splice(startIndex, power);
        
    }
    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum;
}

console.log(solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log(solve([1, 4, 4, 2, 8, 9, 1], [9, 3]));
console.log(solve([1, 7, 7, 1, 2, 3], [7, 1]));
console.log(solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));

/*
Task: Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear. 
The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and it's power.
The output is the sum of the remaining elements in the sequence.
*/
