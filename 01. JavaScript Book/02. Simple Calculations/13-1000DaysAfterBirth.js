function solve(arg) {
    let date = new Date(arg);
    date.setDate(1000);
    console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
}

solve("1995-02-25");
solve("2003-11-07");
