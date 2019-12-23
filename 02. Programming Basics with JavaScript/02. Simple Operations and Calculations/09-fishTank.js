function solve(input) {
    let length = parseFloat(input.shift());
    let width = parseFloat(input.shift());
    let height = parseFloat(input.shift());
    let percent = parseFloat(input.shift());
    let volume = length * height * width / 1000;
    let water = volume * (1 - percent / 100);
    console.log(water.toFixed(3)); 
}

solve([85, 75, 47, 17]);
solve([105, 77, 89, 18.5]);
