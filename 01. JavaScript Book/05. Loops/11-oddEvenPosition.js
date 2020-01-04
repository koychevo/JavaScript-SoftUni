function solve(input) {
    let n = Number(input[0]);
    let oddSum = 0, evenSum = 0;
    let oddMin = Number.POSITIVE_INFINITY, evenMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY, evenMax = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        if (i % 2 === 0) {
            evenSum += num;
            if (num > evenMax) {
                evenMax = num;
            }
            if (num < evenMin) {
                evenMin = num;
            }
        } else {
            oddSum += num;
            if (num > oddMax) {
                oddMax = num;
            }
            if (num < oddMin) {
                oddMin = num;
            }
        }
    }

    if(n === 0) {
        oddMin = "No";
        oddMax = "No";
        evenMin = "No";
        evenMax = "No";
    }

    if(n < 2) {
        evenMin = "No";
        evenMax = "No";
    }

    console.log(`OddSum=${oddSum},`);
    console.log(`OddMin=${oddMin},`);
    console.log(`OddMax=${oddMax},`);
    console.log(`EvenSum=${evenSum},`);
    console.log(`EvenMin=${evenMin},`);
    console.log(`EvenMax=${evenMax}`);
}

solve([6, 2, 3, 5, 4, 2, 1]);
solve([1, -5]);
solve([2, 1.5, -2.5]);
