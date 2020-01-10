function solve(input) {
    let result = "";
    let day = Number(input.shift());
    switch (day) {
        case 1:
            result = "Monday";
            break;
        case 2:
            result = "Tuesday";
            break;
        case 3:
            result = "Wednesday";
            break;
        case 4:
            result = "Thursday";
            break;
        case 5:
            result = "Friday";
            break;
        case 6:
            result = "Saturday";
            break;
        case 7:
            result = "Sunday";
            break;
        default:
            result = "Error";
            break;
    }
    console.log(result);
}

solve([2]);
solve([5]);
solve([10]);