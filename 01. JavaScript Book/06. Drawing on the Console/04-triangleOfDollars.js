function solve(input) {
    let n = Number(input.shift());
    for(let i = 0; i < n; i++) {
        let row = "$";
        for(let j = 0; j < i; j++) {
            row += " $";
        }
        console.log(row);
    }
}

solve([3]);
console.log("\n");
solve([4]);
console.log("\n");
solve([5]);
