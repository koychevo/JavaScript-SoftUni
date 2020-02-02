function solve(input) {
    let n = Number(input.shift());
    let width = 4 * n + 1;
    let dots = ".".repeat((width -3) / 2);
    console.log(dots + "/|\\" + dots);
    console.log(dots + "\\|/" + dots);
    for(let row = 0; row < 2 * n; row++) {
        let dashes = "-".repeat(row);
        let dots = ".".repeat((width - 3) / 2 - row);
        console.log(dots + "*" + dashes + "*" + dashes + "*" + dots);
    }
    let stars = "*". repeat(width);
    console.log(stars);
    console.log("*" + ".*".repeat(width / 2));
    console.log(stars);
}

solve([4]);
solve([7]);