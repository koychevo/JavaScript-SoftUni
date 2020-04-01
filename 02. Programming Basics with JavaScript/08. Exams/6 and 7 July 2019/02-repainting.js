function solve(input) {
    let nylon = Number(input.shift());
    let paint = Number(input.shift());
    let paintTinner = Number(input.shift());
    let hours = Number(input.shift());
    let expenses = (nylon + 2) * 1.50 + 1.1 * paint * 14.50 + paintTinner * 5 + 0.40;
    let totalExpenses = expenses + 0.3 * expenses * hours;
    return `Total expenses: ${totalExpenses.toFixed(2)} lv.`;
}

console.log(solve([10, 11, 4, 8]));
console.log(solve([5, 10, 10, 1]));
console.log(solve([90, 99, 28, 9]));
