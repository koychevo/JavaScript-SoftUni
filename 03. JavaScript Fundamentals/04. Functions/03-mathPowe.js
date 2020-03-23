function mathPower(number, power) {
    let result = 1;
    for(let i = 0; i < power; i++) {
        result *= number;
    }
    return result;
}

console.log(mathPower(2, 8));
console.log(mathPower(3, 4));

/*
Task: Write a function that calculates and returns the value of a number raised to a given power
*/
