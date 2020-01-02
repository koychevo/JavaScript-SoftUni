function solve(input) {
    let n = Number(input[0]);
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            evenSum += Number(input[i]);
        } else {
            oddSum += Number(input[i]);
        }
    }
    if(evenSum === oddSum) {
        console.log("Yes");
        console.log(`Sum = ${oddSum}`);
    } else {
        console.log("No");
        console.log(`Diff = ${Math.abs(evenSum - oddSum)}`);
    }
}

solve([4, 10, 50, 60, 20]);
solve([4, 3, 5, 1, -2]);
solve([3, 5, 8, 1]);

