function solve(input) {
    let primeSum = nonPrimeSum = 0;
    let number = input.shift();
    while(number !== "stop") {
        let isPrime = true;
        number = Number(number);
        if(number < 0) {
            console.log("Number is negative.");
        } else {
            for(let i = 2; i <= Math.sqrt(number); i++) {
                if(number % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime) {
                primeSum += number;
            } else {
                nonPrimeSum += number;
            }
        }
        number = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

solve([3, 9, 0, 7, 19, 4, "stop"]);
solve([30, 83, 33, -1, 20, "stop"]);
solve([0, -9, 0, "stop"]);
