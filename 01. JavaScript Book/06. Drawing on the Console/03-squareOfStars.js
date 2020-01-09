function solve(input) {
    let n = parseInt(input.shift());
    for (let i = 0; i < n; i++) {
        let stars = "*";
        for (let j = 1; j < n; j++) {
            stars += " *";
        }
        console.log(stars);
    }
}

solve([2]);
console.log("\n");
solve([3]);
console.log("\n");
solve([4]);