function solve(input) {
    let hight = Number(input.shift());
    let width = Number(input.shift());
    let percent = Number(input.shift());
    let area = 4 * hight * width;
    let paintNeeded = area - percent / 100 * area;
    let command = input.shift();
    
    while (command !== 'Tired!') {
        let paint = Number(command);
        paintNeeded -= paint;
        if(paintNeeded === 0) {
            return 'All walls are painted! Great job, Pesho!';
        }
        if(paintNeeded < 0) {
            return `All walls are painted and you have ${-paintNeeded} l paint left!`;
        }
        command = input.shift();
    }

    return `${paintNeeded} quadratic m left.`;
}

console.log(solve([3, 5, 10, 2, 3, 4, 'Tired!']));
console.log(solve([2, 3, 25, 6, 7, 8]));
