function solve(number) {
    let num = number;
    let evenSum = oddSum = 0;

    function isEven(num) {
        if(num % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    while(num > 0) {
        let digit = num % 10;
        if(isEven(digit)) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
        num = Math.trunc(num / 10);
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(solve(1000435));
console.log(solve(3495892137259234));

/*
Task: You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.
*/
