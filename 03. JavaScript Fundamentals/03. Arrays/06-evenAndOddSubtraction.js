function solve(numbers) {
    let oddSum = evenSum = 0;
    for(let num of numbers) {
        if(num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    console.log(evenSum - oddSum);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);

/*
Task: Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
*/
