function solve(input) {
    let first = Number(input.shift());
    let second = Number(input.shift());
    let point = Number(input.shift());
    let left = Math.min(first, second);
    let right = Math.max(first, second);
    if(left <= point && point <= right) {
        console.log("in");
    } else {
        console.log("out");
    }
    console.log(Math.min(Math.abs(left - point), Math.abs(right - point)));
}

solve([10, 5, 7]);
solve([8, 10, 5]);
solve([1, -2, 3]);
