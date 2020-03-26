function mathPower(input) {
    let base = Number(input.shift());
    let power = Number(input.shift());
    let result = 1;
    for(let i = 1; i <= power; i++) {
        result *= base;
    }
    return result;
}

console.log(mathPower([2, 8]));
console.log(mathPower([3, 4]));
console.log(mathPower([2, 0]));
console.log(mathPower([0, -4]));
