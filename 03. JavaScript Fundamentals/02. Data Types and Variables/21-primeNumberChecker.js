function solve(num) {
    isPrime = true;
    for(let i = 2; i < Math.sqrt(num); i++) {
        if(num % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime);
} 

solve(7);
solve(8);
solve(81);

/*
Task: Write a function to check if a number is prime (only wholly divisible by itself and one).
The input comes as a single number argument.
The output should be the return value of your function. Return true for prime number and false otherwise.
*/
