function solve(input) {
    let neededHours = Number(input.shift());
    let days = Number(input.shift());
    let employees = Number(input.shift());
    let workedHours = Math.floor(0.9 * days * 8 + employees * days * 2);
    let difference = workedHours - neededHours;
    let result = "";
    if (difference < 0) {
        result = `Not enough time!${Math.abs(difference)} hours needed.`;
    } else {
        result = `Yes!${difference} hours left.`;
    }
    console.log(result);
}

solve([90, 7, 3]);
solve([99, 3, 1]);
solve([50, 5, 2]);
