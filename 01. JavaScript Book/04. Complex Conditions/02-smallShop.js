function solve(input) {
    let product = input.shift().toLowerCase();
    let town = input.shift().toLowerCase();
    let qty = Number(input.shift());
    if(town === "sofia") {
        if(product === "coffee") {
            console.log((qty * 0.5).toFixed(2));
        } else if(product === "water") {
            console.log((qty * 0.8).toFixed(2));
        } else if(product === "beer") {
            console.log((qty * 1.2).toFixed(2));
        } else if(product === "sweets") {
            console.log((qty * 1.45).toFixed(2));
        } else {
            console.log((qty * 1.6).toFixed(2));
        }
    } else if(town === "plovdiv") {
        if(product === "coffee") {
            console.log((qty * 0.4).toFixed(2));
        } else if(product === "water") {
            console.log((qty * 0.7).toFixed(2));
        } else if(product === "beer") {
            console.log((qty * 1.15).toFixed(2));
        } else if(product === "sweets") {
            console.log((qty * 1.3).toFixed(2));
        } else {
            console.log((qty * 1.5).toFixed(2));
        }
    } else {
        if(product === "coffee") {
            console.log((qty * 0.45).toFixed(2));
        } else if(product === "water") {
            console.log((qty * 0.7).toFixed(2));
        } else if(product === "beer") {
            console.log((qty * 1.1).toFixed(2));
        } else if(product === "sweets") {
            console.log((qty * 1.35).toFixed(2));
        } else {
            console.log((qty * 1.55).toFixed(2));
        }
    }
}

solve(["coffee", "Varna", 2]);
solve(["peanuts", "Plovdiv", 1]);
solve(["beer", "Sofia", 6]);
solve(["water", "Plovdiv", 3]);
