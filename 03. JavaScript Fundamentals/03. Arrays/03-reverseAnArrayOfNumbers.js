function solve(n, numbers) {
    let reversedNums = [];
    let j = 0;
    for(let i = n - 1; i >= 0; i--) {
        reversedNums[j] = numbers[i];
        j++;
    }
    let result = reversedNums.join(' ');
    console.log(result);
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);

/*
Task: Write a program which receives a number n and an array of elements. Your task is to create a new array with n numbers, reverse it and print its elements on a single line, space separated.
*/