function solve(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let operator = input.shift();
    let result = '';
    let evenOdd = "even";
    if (num2 === 0 && (operator === "/" || operator === "%")) {
        result = `Cannot divide ${num1} by zero`;
    } else {
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = (num1 / num2).toFixed(2);
                break;
            case "%":
                result = num1 % num2;
                break;
        }

        if (operator === "+" || operator === "-" || operator === "*") {
            if (result % 2 !== 0) {
                evenOdd = "odd";
            }
            result += ` - ${evenOdd}`;
        }
        result = `${num1} ${operator} ${num2} = ${result}`;
    }
    console.log(result);
}

solve([10, 12, "+"]);
solve([123, 12, "/"]);
solve([112, 0, "/"]);
solve([10, 1, "-"]);
solve([10, 3, "%"]);
solve([10, 0, "%"]);
solve([7, 3, "*"]);
