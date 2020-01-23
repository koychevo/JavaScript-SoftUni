function solve(input) {
    let num = Number(input.shift());
    let n = Math.trunc(num / 10);
    let thirdDigit = num % 10;
    let secondDigit = n % 10;
    let firstDigit = Math.trunc(n / 10) % 10;
    let maxRow = firstDigit + secondDigit;
    let maxCol = firstDigit + thirdDigit;
    for (let row = 0; row < maxRow; row++) {
        let line = "";
        for (let col = 0; col < maxCol; col++) {
            if (num % 5 === 0) {
                num -= firstDigit;
            } else if (num % 3 === 0) {
                num -= secondDigit;
            } else {
                num += thirdDigit;
            }
            line += `${num} `;
        }
        console.log(line);
    }
}

solve([132]);
