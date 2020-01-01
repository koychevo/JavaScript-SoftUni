function solve(input) {
    let projection = input.shift().toLowerCase();
    let rows = Number(input.shift());
    let cols = Number(input.shift());
    let places = rows * cols;
    let income = 0;
    switch (projection) {
        case "premiere":
            income = places * 12;
            break;
        case "normal":
            income = places * 7.5;
            break;
        case "discount":
            income = places * 5;
            break;
    }
    console.log(`${income.toFixed(2)} leva`);
}

solve(["Premiere", 10, 12]);
solve(["Normal", 21, 13]);
