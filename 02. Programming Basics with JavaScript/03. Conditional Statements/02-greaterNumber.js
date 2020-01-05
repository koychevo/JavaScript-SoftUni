function solve(input){
    num1 = parseInt(input.shift());
    num2 = parseInt(input.shift());
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
