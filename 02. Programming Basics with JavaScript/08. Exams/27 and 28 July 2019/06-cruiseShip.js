function solve(input) {
    let cruiseType = input.shift();
    let cabin = input.shift();
    let nights = Number(input.shift());
    let price = 27.50;
    if(cabin === "standard cabin" && cruiseType === "Adriatic") {
        price = 22.99;
    }
    if(cabin === "standard cabin" && cruiseType === "Aegean") {
        price = 23.00;
    }
    if(cabin === "cabin with balcony" && cruiseType === "Mediterranean") {
        price = 30.20;
    }
    if(cabin === "cabin with balcony" && cruiseType === "Adriatic") {
        price = 25.00;
    }
    if(cabin === "cabin with balcony" && cruiseType === "Aegean") {
        price = 26.5;
    }
    if(cabin === "apartment" && cruiseType === "Mediterranean") {
        price = 40.50;
    }
    if(cabin === "apartment" && cruiseType === "Adriatic") {
        price = 34.99;
    }
    if(cabin === "apartment" && cruiseType === "Aegean") {
        price = 39.80;
    }
    let costs = 4 * nights * price;
    if(nights > 7) {
        costs *= 0.75;
    }
    console.log(`Annie's holiday in the ${cruiseType} sea costs ${costs.toFixed(2)} lv.`);
}

solve(["Aegean", "standard cabin", 10]);
solve(["Adriatic", "apartment", 5]);
solve(["Mediterranean", "cabin with balcony", 12]);
