function solve(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let result = "";
    for(let num = firstNumber; num <= secondNumber; num++) {
        let evenSum = oddSum = 0;
        let number = num;
        for(let i = 1; i <= 6; i++) {
            let digit = number % 10;
            number = Math.trunc(number / 10);
            if(i % 2 === 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }
        if(evenSum === oddSum) {
            result += `${num} `;
        }
    }
    console.log(result);
}

solve([100000, 100050]);
solve([123456, 124000]);
solve([299900, 300000]);
