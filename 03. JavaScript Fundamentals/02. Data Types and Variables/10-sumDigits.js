function solve(num) {
    let sum = 0;
    while(num > 0) {
        sum += num % 10;
        num = Math.trunc(num / 10);
    }
    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);

/*
Task: Write a function which will be given a single number. Your task is to find the sum of its digits.
*/
