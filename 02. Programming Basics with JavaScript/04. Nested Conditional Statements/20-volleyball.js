function solve(input) {
    let year = input.shift().toLowerCase();
    let holidays = Number(input.shift());
    let weekendsNotInSofia = Number(input.shift());
    const weekends = 48;
    let volleyballPlays = weekendsNotInSofia + (weekends - weekendsNotInSofia) * 3 / 4 + holidays * 2 / 3;
    if(year === "leap") {
        volleyballPlays *= 1.15;
    }
    console.log(Math.trunc(volleyballPlays));
}

solve(["leap", 5, 2]);
solve(["normal", 3, 2]);
solve(["leap", 2, 3]);
solve(["normal", 11, 6]);
solve(["leap", 0, 1]);
solve(["normal", 6, 13]);
