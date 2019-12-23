function solve(input) {
        let a = Number(input.shift());
        let h = Number(input.shift());
        let area = a * h / 2;
        console.log(area.toFixed(2));
}

solve([20, 30]);
solve([15, 35]);
solve([7.75, 8.45]);
solve([1.23456, 4.56789]);
