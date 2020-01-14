function solve(input) {
    let n = Number(input.shift());
    let oddSum = 0;
    let evenSum = 0;
    for(let i = 0; i < n; i++) {
        let num = Number(input[i]);
            if(i % 2 === 0) {
                evenSum += num;
            } else {
                oddSum += num;
            }
    }
    if(evenSum === oddSum) {
        console.log("Yes");
        console.log(`Sum = ${evenSum}`);
    } else {
        console.log("No");
        console.log(`Diff = ${Math.abs(evenSum - oddSum)}`);
    }
}

solve([4, 10, 50, 60, 20]);
solve([4, 3, 5, 1, -2]);
solve([3, 5, 8, 1]);
