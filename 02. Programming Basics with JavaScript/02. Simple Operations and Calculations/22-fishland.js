function solve(input) {
    let mackerelPrice = Number(input.shift());
    let cacaPrice = Number(input.shift());
    let palamudQty = Number(input.shift());
    let safridQty = Number(input.shift());
    let clamsQty = Number(input.shift());
    let total = palamudQty * 1.6 * mackerelPrice + safridQty * 1.8 * cacaPrice + clamsQty * 7.5;
    console.log(total.toFixed(2));
}

solve([6.90, 4.20, 1.5, 2.5, 1]);
solve([5.55, 3.57, 4.3, 3.6, 7]);
solve([7.79, 5.35, 9.3, 0, 0]);
