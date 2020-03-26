function solve(n, k) {
    let sum = 1;
    let j = 1;
    let arr = [1];
    for(let i = 1; i < n; i++) {
        j++;
        arr[i] = sum;
        sum += (j > k) ? arr[i] - arr[i-k] : arr[i];
    }
    return arr.join(' ');
}

console.log(solve(6, 3));
console.log(solve(8, 2));

/*
Task: You are given two integers n and k. Write a function that generates and prints the following sequence:
•	The first element is 1.
•	Every following element equals the sum of the previous k elements.
•	The length of the sequence is n elements.
	
The input comes as two number arguments. The first element represents the number n, and the second – the number k.
The output is printed on the console on a single line, separated by space.
*/
