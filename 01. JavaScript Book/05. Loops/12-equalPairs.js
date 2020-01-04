function solve(input) {
    let n = Number(input[0]);
    let difference = 0;
    let pairValue = Number(input[1]) + Number(input[2]);
    for (let i = 3; i < 2 * n; i += 2) {
        let currentPairValue = Number(input[i]) + Number(input[i + 1]);
        let currentDifference = Math.abs(currentPairValue - pairValue);
        if (currentDifference > difference) {
            difference = currentDifference;
        }
        pairValue = currentPairValue;
    }
    let result = "";
    if (difference > 0) {
        result = `No, maxdiff=${difference}`;
    } else {
        result = `Yes, value=${pairValue}`;
    }
    console.log(result);
}

solve([3, 1, 2, 0, 3, 4, -1]);
solve([2, 1, 2, 2, 2]);
solve([4, 1, 1, 3, 1, 2, 2, 0, 0]);
solve([2, -1, 0, 0, -1]);
solve([2, -1, 2, 0, -1]);
solve([1, 5, 5]);
