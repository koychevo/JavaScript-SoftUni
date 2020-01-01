function solve(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let operator = input.shift();

    if ((num2 === 0) && ((operator === "/") || (operator === "%"))) {
        console.log(`Cannot divide ${num1} by zero`);
        return;
    }
    let oddEven = "even";
    let result = "";
    let calculation = 0;
    switch (operator) {
        case "+": 
            calculation = num1 + num2;
            result += `${num1} + ${num2} = ${calculation}`;
            break;
        case "-":
            calculation = num1 - num2;
            result += `${num1} - ${num2} = ${calculation}`;
            break;
        case "*":
            calculation = num1 * num2;
            result += `${num1} * ${num2} = ${calculation}`;
            break;
        case "/":
            result += `${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`;
            break;
        case "%":
            result += `${num1} % ${num2} = ${num1 % num2}`;
            break;
    }

    if((operator === "/") || (operator === "%")) {
        console.log(result);
    } else {
        if(calculation % 2 !== 0) {
            oddEven = "odd";
        }
        console.log(`${result} - ${oddEven}`);
    }
}

solve([123, 12, "/"]);
solve([112, 0, "/"]);
solve([10, 3, "%"]);
solve([10, 0, "%"]);
solve([10, 12, "+"]);
solve([10, 1, "-"]);
solve([7, 3, "*"]);
