function solve(input) {
    let n = Number(input.shift());
    let oddSum = evenSum = 0;
    let oddMin = evenMin = Number.POSITIVE_INFINITY;
    let oddMax = evenMax = Number.NEGATIVE_INFINITY;
    for(let i = 1; i <= n; i++) {
        let num = Number(input.shift());
        if(i % 2 === 0) {
            evenSum += num;
            evenMin = (evenMin > num) ? num : evenMin;
            evenMax = (evenMax < num) ? num : evenMax;
        } else {
            oddSum += num;
            oddMin = (oddMin > num) ? num : oddMin;
            oddMax = (oddMax < num) ? num : oddMax;
        }
    }
    oddMin = (oddMin === Number.POSITIVE_INFINITY) ? "No" : oddMin.toFixed(2);
    evenMin = (evenMin === Number.POSITIVE_INFINITY) ? "No" : evenMin.toFixed(2);
    oddMax = (oddMax === Number.NEGATIVE_INFINITY) ? "No" : oddMax.toFixed(2);
    evenMax = (evenMax === Number.NEGATIVE_INFINITY) ? "No" : evenMax.toFixed(2);
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin},`);
    console.log(`OddMax=${oddMax},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin},`);
    console.log(`EvenMax=${evenMax}`);
}

solve([6, 2, 3, 5, 4, 2, 1]);
solve([2, 1.5, -2.5]);
solve([1, 1]);
solve([0]);
solve([5, 3, -2, 8, 11, -3]);
solve([4, 1.5, 1.75, 1.5, 1.75]);
solve([1, -5]);
solve([3, -1, -2, -3]);
