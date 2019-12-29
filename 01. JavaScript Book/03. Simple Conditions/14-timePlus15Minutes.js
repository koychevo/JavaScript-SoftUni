function solve(input) {
    let hours = Number(input.shift());
    let mins = Number(input.shift());
    mins = mins + 15;
    if(mins > 59) {
        hours += Math.trunc(mins / 60);
        mins = mins % 60;
    }
    if(hours === 24) {
        hours = 0;
    }
    if(hours > 24) {
        hours = Math.trunc(hours / 24);
    }
    if(mins < 10) {
        mins = "0" + mins;
    }
    console.log(`${hours}:${mins}`);
}

solve([1, 46]);
solve([0, "01"]);
solve([23, 59]);
solve([11, "08"]);
