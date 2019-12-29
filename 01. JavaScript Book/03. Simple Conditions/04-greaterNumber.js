function solve([arg1, arg2]) {
    let num1 = parseInt(arg1);
    let num2 = parseInt(arg2);
    if(num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

solve([5, 3]);
solve([3, 5]);
solve([10, 10]);
solve([-5, 5]);
