function solve(input) {
    let firstStart = Number(input.shift());
    let secondStart = Number(input.shift());
    let firstEnd = Number(input.shift());
    let secondEnd = Number(input.shift());
    let result = "";

    function isPrime(num) {
        let primeNum = true;
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) {
                primeNum = false;
                break;
            }
        }
        return primeNum;
    }

    for (let first = firstStart; first <= firstStart + firstEnd; first++) {
        if(isPrime(first)) {
            for (let second = secondStart; second <= secondStart + secondEnd; second++) {
                if(isPrime(second)) {
                    result += `${first}${second}\n`;
                }
            }
        }
    }

    console.log(result);
}

solve([10, 20, 5, 5]);
solve([10, 30, 9, 6]);
