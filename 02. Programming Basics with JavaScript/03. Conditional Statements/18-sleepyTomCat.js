function solve(input) {
    const norm = 30000;
    let freeDays = parseInt(input.shift());
    let playing = freeDays * 127 + (365 - freeDays) * 63;
    let difference = norm - playing;
    let result = "";
    if (difference >= 0) {
        result = `Tom sleeps well\n${Math.trunc(difference / 60)} hours and ${difference % 60} minutes less for play`;
    } else {
        result = `Tom will run away\n${Math.trunc(Math.abs(difference) / 60)} hours and ${Math.abs(difference) % 60} minutes more for play`;
    }
    console.log(result);
}


solve([20]);
solve([113]);
