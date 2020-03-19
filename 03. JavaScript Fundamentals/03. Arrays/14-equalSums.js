function solve(numbers) {
    let leftSum = numbers[0];
    let rightSum = 0;
    let index = -1;
    let len = numbers.length;
    if(len === 1) {
        index = 0;
    }
    for(let i = 2; i < len; i++) {
        rightSum += numbers[i];
    }
    for(let i = 1; i < len - 1; i++) {
        if(leftSum === rightSum) {
            index = i;
            break;
        }
        leftSum += numbers[i];
        rightSum -= numbers[i+1];
    }
    if(index < 0) {
        console.log('no');
    } else {
        console.log(index);
    }
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

/*
Task: Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right. 
If there are NO elements to the left/right, their sum is 0.
Print the index that satisfies the required condition or "no" if there is no such index.
*/
