function solve(input) {
    let lemons = Number(input.shift());
    let sugar = Number(input.shift());
    let water = Number(input.shift());
    let juice = lemons * 980 + water * 1000 + 0.3 * sugar;
    let cups = Math.trunc(juice / 150);
    console.log(`All cups sold: ${cups}`);
    console.log(`Money earned: ${(cups * 1.2).toFixed(2)}`);
}

solve([5, 3.5, 5]);
solve([250, 20, 100]);
solve([85, 17.5, 35]);