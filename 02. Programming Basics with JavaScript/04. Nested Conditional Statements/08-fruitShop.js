function solve(input) {
    let product = input.shift().toLowerCase();
    let day = input.shift().toLowerCase();
    let qty = Number(input.shift());
    let result = "";
    if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
        switch (product) {
            case "banana":
                result = (qty * 2.5).toFixed(2);
                break;
            case "apple":
                result = (qty * 1.2).toFixed(2);
                break;
            case "orange":
                result = (qty * 0.85).toFixed(2);
                break;
            case "grapefruit":
                result = (qty * 1.45).toFixed(2);
                break;
            case "kiwi":
                result = (qty * 2.7).toFixed(2);
                break;
            case "pineapple":
                result = (qty * 5.5).toFixed(2);
                break;
            case "grapes":
                result = (qty * 3.85).toFixed(2);
                break;
            default:
                result = "error";
                break;
        }
    } else if (day === "saturday" || day === "sunday") {
        switch (product) {
            case "banana":
                result = (qty * 2.7).toFixed(2);
                break;
            case "apple":
                result = (qty * 1.25).toFixed(2);
                break;
            case "orange":
                result = (qty * 0.9).toFixed(2);
                break;
            case "grapefruit":
                result = (qty * 1.6).toFixed(2);
                break;
            case "kiwi":
                result = (qty * 3).toFixed(2);
                break;
            case "pineapple":
                result = (qty * 5.6).toFixed(2);
                break;
            case "grapes":
                result = (qty * 4.2).toFixed(2);
                break;
            default:
                result = "error";
                break;
        }
    } else {
        result = "error";
    }
    console.log(result);
}

solve(["apple", "Tuesday", 2]);
solve(["orange", "Sunday", 3]);
solve(["kiwi", "Monday", 2.5]);
solve(["grapes", "Saturday", 0.5]);
solve(["tomato", "Monday", 0.5]);
