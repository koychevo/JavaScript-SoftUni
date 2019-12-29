function solve([arg1, arg2]) {
    let n = parseInt(arg1);
    let timeZone = arg2;
    let taxiDayKm = 0.79;
    let taxiNightKm = 0.9;
    let taxiStart = 0.7;
    let busKm = 0.09;
    let trainKm = 0.06;
    let price = 0;
    if(n < 20) {
        price = timeZone === "day" ? n * taxiDayKm : n * taxiNightKm;
        price += taxiStart;
    } else if(n < 100) {
        price = n * busKm;
    } else {
        price = n * trainKm;
    }
    console.log(price);
}

solve([5, "day"]);
solve([7, "night"]);
solve([25,"day"]);
solve([180, "night"]);
