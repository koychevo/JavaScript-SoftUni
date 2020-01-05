function solve(input) {
    let area = 0;
    let figure = input.shift().toLowerCase();
    switch (figure) {
        case "square":
            area = Math.pow(Number(input.shift()), 2);
            break;
        case "rectangle":
            area = Number(input.shift()) * Number(input.shift());
            break;
        case "triangle":
            area = Number(input.shift()) * Number(input.shift()) / 2;
            break;
        case "circle":
            area = Math.PI * Math.pow(Number(input.shift()), 2);
            break;
    }
    console.log(area.toFixed(3));
}

solve(["square", 5]);
solve(["rectangle", 7, 2.5]);
solve(["circle", 6]);
solve(["triangle", 4.5, 20]);
