function solve(input) {
    let month = input.shift().toLowerCase();
    let nights = Number(input.shift());
    let studioPrice = 0;
    let apartmentPrice = 0;
    switch (month) {
        case "may":
        case "october":
            studioPrice = 50;
            apartmentPrice = 65;
            break;
        case "june":
        case "september":
            studioPrice = 75.20;
            apartmentPrice = 68.7;
            break;
        case "july":
        case "august":
            studioPrice = 76;
            apartmentPrice = 77;
            break;
    }
    let studioCosts = nights * studioPrice;
    let apartmentCosts = nights * apartmentPrice;
    if(nights > 14) {
        apartmentCosts *= 0.9;
        if(month === "may" || month === "october") {
            studioCosts *= 0.7;
        }
        if(month === "june" || month === "september") {
            studioCosts *= 0.8;
        }
    } else if(nights > 7) {
        if(month === "may" || month === "october") {
            studioCosts *= 0.95;
        }
    }
    console.log(`Apartment: ${apartmentCosts.toFixed(2)} lv.`);
    console.log(`Studio: ${studioCosts.toFixed(2)} lv.`);
}

solve(["May", 15]);
solve(["June", 14]);
solve(["August", 20]);
