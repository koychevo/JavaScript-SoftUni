function solve(input) {
    let d = Number(input.shift());
    let m = Number(input.shift());
    d += 5;
    if(d > 28 && m === 2) {
        d -= 28;
        m++;
    }
    if(d > 30 && (m === 4 || m === 6 || m === 9 || m === 11)) {
        d -= 30;
        m++;
    }
    if(d > 31 && (m === 1 || m === 3 || m === 5 || m === 7 || m=== 8 || m === 10 || m === 12)) {
        d -= 31;
        m++;
    }
    m = m > 12 ? m - 12 : m;
    m = m < 10 ? "0" + m : m;
    console.log(`${d}.${m}`);
}

solve(["28", "03"]);
solve(["27", "12"]);
solve(["25", "1"]);
solve(["26", "02"]);