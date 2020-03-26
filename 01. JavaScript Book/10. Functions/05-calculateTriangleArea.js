function calculateArea(input) {
    let a = Number(input.shift());
    let h = Number(input.shift());
    return a * h / 2;
}

console.log(calculateArea([3, 4]));
