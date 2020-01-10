function solve(input) {
    let product = input.shift().toLowerCase();
    let town = input.shift().toLowerCase();
    let qty = Number(input.shift());
    let result = "";
    if (town === "sofia") {
        switch (product) {
            case "coffee":
                result = qty * 0.5;
                break;
            case "water":
                result = qty * 0.8;
                break;
            case "beer":
                result = qty * 1.2;
                break;
            case "sweets":
                result = qty * 1.45;
                break;
            case "peanuts":
                result = qty * 1.6;
                break;
        }
    } else if (town === "plovdiv") {
        switch (product) {
            case "coffee":
                result = qty * 0.4;
                break;
            case "water":
                result = qty * 0.7;
                break;
            case "beer":
                result = qty * 1.15;
                break;
            case "sweets":
                result = qty * 1.3;
                break;
            case "peanuts":
                result = qty * 1.5;
                break;
        }
    } else if (town === "varna") {
        switch (product) {
            case "coffee":
                result = qty * 0.45;
                break;
            case "water":
                result = qty * 0.7;
                break;
            case "beer":
                result = qty * 1.1;
                break;
            case "sweets":
                result = qty * 1.35;
                break;
            case "peanuts":
                result = qty * 1.55;
                break;
        }
    }
    console.log(result);
}

solve(["coffee", "Varna", 2]);
solve(["peanuts", "Plovdiv", 1]);
solve(["water", "Plovdiv", 3]);
