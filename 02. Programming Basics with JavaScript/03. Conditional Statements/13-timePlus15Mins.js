function solve(input) {
    let hours = Number(input.shift());
    let mins = Number(input.shift());
    let time = hours * 60 + mins + 15;
    hours = Math.floor(time / 60);
    mins = time % 60;
    if (hours > 23) {
        hours = 0;
    }
    if(mins < 10) {
        mins = "0" + mins;
    }
    console.log(`${hours}:${mins}`);
}

solve([1, 46]);
solve([0, "01"]);
solve([23, 59]);
solve(["11", "08"]);
solve([12, 49]);
