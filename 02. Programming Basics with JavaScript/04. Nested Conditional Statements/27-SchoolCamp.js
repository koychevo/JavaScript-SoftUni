function solve(input) {
    let season = input.shift().toLowerCase();
    let groupType = input.shift().toLowerCase();
    let pupils = Number(input.shift());
    let nights = Number(input.shift());
    let price = 0;
    let sport = "";
    if (season === "winter") {
        price = (groupType === "mixed") ? 10 : 9.6;
        if (groupType === "boys") {
            sport = "Judo";
        } else if (groupType === "girls") {
            sport = "Gymnastics";
        } else {
            sport = "Ski";
        }
    } else if (season === "spring") {
        price = (groupType === "mixed") ? 9.5 : 7.2;
        if (groupType === "boys") {
            sport = "Tennis";
        } else if (groupType === "girls") {
            sport = "Athletics";
        } else {
            sport = "Cycling";
        }
    } else if (season === "summer") {
        price = (groupType === "mixed") ? 20 : 15;
        if (groupType === "boys") {
            sport = "Football";
        } else if (groupType === "girls") {
            sport = "Volleyball";
        } else {
            sport = "Swimming";
        }
    }
    let costs = pupils * nights * price;
    if(pupils >= 10 && pupils < 20) {
        costs *= 0.95;
    } else if(pupils >= 20 && pupils < 50) {
        costs *= 0.85;
    } else if(pupils >= 50) {
        costs *= 0.5;
    }
    console.log(`${sport} ${costs.toFixed(2)} lv.`)
}

solve(["Spring", "girls", 20, 7]);
solve(["Winter", "mixed", 9, 15])
solve(["Summer", "boys", 60, 7])
solve(["Spring", "mixed", 17, 14])
