function solve(n) {
    for(let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;
        while(num > 0) {
            sum += num % 10;
            num = Math.trunc(num / 10);
        }
        let isSpecial = (sum === 5 || sum === 7 || sum === 11) ? "True" : "False";
        console.log(`${i} -> ${isSpecial}`);
    }
}

solve(15);

/*
Task: Write a program to receive a number n and for all numbers in the range 1…n print the number and if it is special or not (True / False).
A number is special when its sum of digits is 5, 7 or 11.
*/
