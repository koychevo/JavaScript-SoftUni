function generateArray(n, k) {
    let numbers = [];
    numbers.push(1);
    while(numbers.length < n) {
        let start = numbers.length - k;
        if(start < 0) {
            start = 0;
        }
        let num = numbers.slice(start).reduce((acc, el) => acc + el);
        numbers.push(num);
    }
    return numbers.join(' ');
}

console.log(generateArray(6, 3));
console.log(generateArray(8, 2));

/*
Task: You are given two integers n and k. Write a JS function that generates and prints the following sequence:
•	The first element is 1
•	Every following element equals the sum of the previous k elements
•	The length of the sequence is n elements
The input comes as two number arguments. The first element represents the number n, and the second – the number k.
The output is printed on the console on a single line, separated by space.
*/
