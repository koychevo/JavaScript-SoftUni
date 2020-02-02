function solve(input) {
    let n = Number(input.shift());
    let rows = (n % 2 === 0) ? n - 1 + 2 : n + 2;
    for (let row = 1; row <= rows; row++) {
        let line = "";
        if (row === 1 || row === rows) {
            line = "%".repeat(2 * n);
        } else if (row === Math.ceil(rows / 2)) {
            let spaces = " ".repeat(n - 2);
            line = "%" + spaces + "**" + spaces + "%";
        } else {
            line = "%" + " ".repeat(2 * (n - 1)) + "%";
        }
        console.log(line);
    }
}

solve([3]);
solve([4]);