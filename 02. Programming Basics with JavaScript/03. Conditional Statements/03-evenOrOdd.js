function solve(input) {
    let num = parseInt(input.shift());
    if(num % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

solve([2]);
solve([3]);
solve([25]);
solve([1024]);