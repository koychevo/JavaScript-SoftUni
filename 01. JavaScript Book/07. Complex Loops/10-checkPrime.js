function solve(input) {
    let n = Number(input.shift());
    let prime = true;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            prime = false;
            break;
        }
    }
    if(prime && n >= 2) {
        console.log("Prime");
    } else {
        console.log("Not prime");
    }
}

solve([1]);
solve([7]);
solve([20]);
