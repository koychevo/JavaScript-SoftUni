function solve(numbers) {
    let num = numbers[0];
    let maxSequence = 1;
    let sequence = 1;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === numbers[i + 1]) {
            sequence++;
            if(i === numbers.length - 2 && sequence > maxSequence) {
                maxSequence = sequence;
                num = numbers[i];
            }
        } else {
            if (sequence > maxSequence) {
                maxSequence = sequence;
                num = numbers[i];
            }
            sequence = 1;
        }
    }
    let result = '';
    for (let i = 0; i < maxSequence; i++) {
        result += `${num} `;
    }
    console.log(result);
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);

/*
Task: Write a function that finds the longest sequence of equal elements in an array of numbers. 
If several longest sequences exist, print the leftmost one.
*/
