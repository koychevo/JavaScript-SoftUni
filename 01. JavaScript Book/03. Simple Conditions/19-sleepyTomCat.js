function solve(input) {
    const daysInYear = 365;
    const norm = 30000;
    let freeDays = parseInt(input.shift());
    let playing = freeDays * 127 + (daysInYear - freeDays) * 63;
    let difference = norm - playing;
    if(difference >= 0) {
        console.log("Tom sleeps well");
        console.log(`${Math.trunc(difference / 60)} hours and ${difference % 60} minutes less for play`);
    } else {
        console.log("Tom will run away");
        difference = Math.abs(difference);
        console.log(`${Math.trunc(difference / 60)} hours and ${difference % 60} minutes more for play`);
    }
}


solve([20]);
solve([113]);
