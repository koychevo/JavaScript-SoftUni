function solve(input) {
    let points = Number(input.shift());
    let isBullseye = false;
    let turns = 0;
    let result = "";
    while(points > 0) {
        let field = input.shift();
        turns++;
        if(field === "bullseye") {
            isBullseye = true;
            break;
        }
        let currentPoint = Number(input.shift());
        if(field === "number section") {
            points -= currentPoint;
        } else if(field === "double ring") {
            points -= 2 * currentPoint;
        } else if(field === "triple ring") {
            points -= 3 * currentPoint;
        } 
    }
    if(isBullseye) {
        result = `Congratulations! You won the game with a bullseye in ${turns} moves!`;
    } else {
        if(points < 0) {
            result = `Sorry, you lost. Score difference: ${-points}.`;
        } else {
            result = `Congratulations! You won the game in ${turns} moves!`;
        }
    }
    console.log(result);
}

solve([150, "double ring", 20, "triple ring", 10, "number section", 20, "triple ring", 20]);
solve([101, "triple ring", 7, "double ring", 19, "bullseye"]);
solve([75, "triple ring", 17, "number section", 16, "triple ring", 13, "double ring", 10]);
