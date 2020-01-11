function solve(input) {
    let town = input.shift().toLowerCase();
    let sales = Number(input.shift());
    let result = "";
    if (sales < 0) {
        result = "error";
    } else if (sales <= 500) {
        switch (town) {
            case "sofia":
                result = (0.05 * sales).toFixed(2);
                break;
            case "varna":
                result = (0.045 * sales).toFixed(2);
                break;
            case "plovdiv":
                result = (0.055 * sales).toFixed(2);
                break;
            default:
                result = "error";
                break;
        }
    } else if (sales <= 1000) {
        switch (town) {
            case "sofia":
                result = (0.07 * sales).toFixed(2);
                break;
            case "varna":
                result = (0.075 * sales).toFixed(2);
                break;
            case "plovdiv":
                result = (0.08 * sales).toFixed(2);
                break;
            default:
                result = "error";
                break;
        }
    } else if (sales <= 10000) {
        switch (town) {
            case "sofia":
                result = (0.08 * sales).toFixed(2);
                break;
            case "varna":
                result = (0.1 * sales).toFixed(2);
                break;
            case "plovdiv":
                result = (0.12 * sales).toFixed(2);
                break;
            default:
                result = "error";
                break;
        }
    } else {
        switch (town) {
            case "sofia":
                result = (0.12 * sales).toFixed(2);
                break;
            case "varna":
                result = (0.13 * sales).toFixed(2);
                break;
            case "plovdiv":
                result = (0.145 * sales).toFixed(2);
                break;
            default:
                result = "error";
                break;
        }
    }
    console.log(result);
}

solve(["Sofia", 1500]);
solve(["Plovdiv", 499.99]);
solve(["Varna", 3874.50]);
solve(["Kaspichan", - 50]);
