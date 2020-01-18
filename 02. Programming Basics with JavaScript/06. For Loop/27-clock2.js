function solve() {
    for(let hours = 0; hours < 24; hours++) {
        for(let mins = 0; mins < 60; mins++) {
            for(let secs = 0; secs < 60; secs++) {
                console.log(`${hours} : ${mins} : ${secs}`);
            }
        }
    }
}

solve();