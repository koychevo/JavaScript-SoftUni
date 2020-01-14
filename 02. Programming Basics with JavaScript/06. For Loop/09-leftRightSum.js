function solve(input) {
    let n = Number(input.shift());
    let leftSum = 0;
    let rightSum = 0;
    for(let i = 0; i < n; i++) {
        leftSum += Number(input[i]);
        rightSum += Number(input[2*n - 1 - i]);
    }
    if(leftSum === rightSum) {
        console.log(`Yes, sum = ${leftSum}`);
    } else {
        console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`);
    }
}

solve([2, 10, 90, 50, 50]);
solve([2, 90, 9, 50, 50]);
