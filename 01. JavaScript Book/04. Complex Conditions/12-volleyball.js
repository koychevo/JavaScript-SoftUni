function solve(input) {
    const weekends = 48;
    let year = input.shift().toLowerCase();
    let holidays = parseInt(input.shift());
    let weekendsAtHome = parseInt(input.shift());
    let volleyballDays = holidays * 2 / 3 + (weekends - weekendsAtHome) * 3 / 4 + weekendsAtHome;
    if(year === "leap") {
        volleyballDays *= 1.15;
    }
    console.log(Math.floor(volleyballDays));
}

solve(["leap", 5, 2]);
solve(["normal", 3, 2]);
solve(["normal", 11, 6]);
solve(["leap", 0, 1]);
