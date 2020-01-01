function solve(input) {
    let fruit = input.shift().toLowerCase();
    let day = input.shift().toLowerCase();
    let qty = Number(input.shift());
    let price;
    
    if ((day === "saturday") || (day === "sunday")) {
        switch (fruit) {
            case "banana":
                price = 2.70;
                break;
            case "apple":
                price = 1.25;
                break;
            case "orange":
                price = 0.9;
                break;
            case "grapefruit":
                price = 1.60;
                break;
            case "kiwi":
                price = 3.00;
                break;
            case "pineapple":
                price = 5.60;
                break;
            case "grapes":
                price = 4.20;
                break;
            default:
                price = 0;
                break;
        }
    } else if ((day === "monday") || (day === "tuesday") || (day === "wednesday") || (day === "thursday") || (day === "friday")) {
        switch (fruit) {
            case "banana":
                price = 2.50;
                break;
            case "apple":
                price = 1.20;
                break;
            case "orange":
                price = 0.85;
                break;
            case "grapefruit":
                price = 1.45;
                break;
            case "kiwi":
                price = 2.70;
                break;
            case "pineapple":
                price = 5.50;
                break;
            case "grapes":
                price = 3.85;
                break;
            default:
                price = 0;
                break;
        }
    } else {
        price = 0;
    }
    if(price === 0) {
        console.log("error");
        return;
    }
    price *= qty;
    console.log(price.toFixed(2));
}

solve(["orange", "Sunday", 3]);
solve(["kiwi", "Monday", 2.5]);
solve(["grapes", "Saturday", 0.5]);
solve(["tomato", "Monday", 0.5]);
