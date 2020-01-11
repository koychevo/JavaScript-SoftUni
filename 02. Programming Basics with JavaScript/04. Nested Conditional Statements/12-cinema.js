function solve(input) {
    let type = input.shift().toLowerCase();
    let rows = Number(input.shift());
    let cols = Number(input.shift());
    let income = 0;
    let ticketPrice = 0;
    if(type === "premiere") {
        ticketPrice = 12;
    } else if(type === "normal") {
        ticketPrice = 7.5;
    } else if(type === "discount") {
        ticketPrice = 5;
    }
    income = ticketPrice * rows * cols;
    console.log(`${income.toFixed(2)} leva`);
}

solve(["Premiere", 10, 12]);
solve(["Normal", 21, 13]);
solve(["Discount", 12, 30]);