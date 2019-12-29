function solve(input) {
    let num = parseInt(input.shift());
    let firstDigit = Math.floor(num / 10);
    let lastDigit = num % 10;
    if(num > 100) {
        return;
    }
    switch (lastDigit) {
        case 0:
            lastDigit = "zero";
            break;
        case 1:
            lastDigit = "one";
            break;
        case 2:
            lastDigit = "two";
            break;
        case 3:
            lastDigit = "three";
            break;
        case 4:
            lastDigit = "four";
            break;
        case 5:
            lastDigit = "five";
            break;
        case 6:
            lastDigit = "six";
            break;
        case 7:
            lastDigit = "seven";
            break;
        case 8:
            lastDigit = "eight";
            break;
        default:
            lastDigit = "nine";
            break;
    }

    if (firstDigit < 1) {
        firstDigit = '';
    } else if (firstDigit < 10) {
        if (lastDigit === "zero") {
            lastDigit = "";
        }
        switch (firstDigit) {
            case 2:
                firstDigit = "twenty";
                break;
            case 3:
                firstDigit = "thirty";
                break;
            case 4:
                firstDigit = "forty";
                break;
            case 5:
                firstDigit = "fifty";
                break;
            case 6:
                firstDigit = "sixty";
                break;
            case 7:
                firstDigit = "seventy";
                break;
            case 8:
                firstDigit = "eighty";
                break;
            case 9:
                firstDigit = "ninety";
                break;
            default:
                firstDigit = "";
                if (lastDigit === "") {
                    lastDigit = "ten";
                } else if (lastDigit === "one") {
                    lastDigit = "eleven";
                } else if (lastDigit === "two") {
                    lastDigit = "twelve";
                } else if (lastDigit === "three") {
                    lastDigit = "thirteen";
                } else if (lastDigit === "five") {
                    lastDigit = "fifteen";
                } else if (lastDigit === "eight") {
                    lastDigit += "een";
                } else {
                    lastDigit += "teen";
                }
                    break;
        }
    } else {
        firstDigit = "one";
        lastDigit = "hundred";
    }
    console.log((firstDigit + " " + lastDigit).trim());
}


solve([17]);
solve([16]);
solve([22]);
solve([23]);
