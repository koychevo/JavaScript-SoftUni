function solve(input) {
    let qty = Number(input.shift());
    let inputMetric = input.shift();
    let outputMetric = input.shift();
    switch (inputMetric) {
        case "cm":
            qty = qty / 100;
            break;
        case "mm":
            qty = qty / 1000;
            break;
        case "mi":
            qty = qty / 0.000621371192;
            break;
        case "in":
            qty = qty / 39.3700787;
            break;
        case "km":
            qty = qty / 0.001;
            break;
        case "ft":
            qty = qty / 3.2808399;
            break;
        case "yd":
            qty = qty / 1.0936133;
            break;
        default:
            break;
    }

    switch (outputMetric) {
        case "cm":
            qty = qty * 100;
            break;
        case "mm":
            qty = qty * 1000;
            break;
        case "mi":
            qty = qty * 0.000621371192;
            break;
        case "in":
            qty = qty * 39.3700787;
            break;
        case "km":
            qty = qty * 0.001;
            break;
        case "ft":
            qty = qty * 3.2808399;
            break;
        case "yd":
            qty = qty * 1.0936133;
            break;
        default:
            break;
    }
    console.log(qty);
}

solve([12, "km", "ft"]);
solve([150, "mi", "in"]);
solve([450, "yd", "km"]);
