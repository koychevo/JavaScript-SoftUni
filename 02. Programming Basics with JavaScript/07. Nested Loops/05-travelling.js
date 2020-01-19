function solve(input) {
    while(true) {
        let destination = input.shift();
        if(destination === "End") {
            break;
        }
        let moneyNeeded = Number(input.shift());
        let moneySaved = 0;
        while(moneySaved < moneyNeeded) {
            moneySaved += Number(input.shift());
        }
        console.log(`Going to ${destination}!`);
    }
}

solve(["Greece", 1000, 200, 200, 300, 100, 150, 240, "Spain", 1200, 300, 500, 193, 423, "End"]);
solve(["France", 2000, 300, 300, 200, 400, 190, 258, 360, "Portugal", 1450, 400, 400, 200, 300, 300, "Egypt", 1900, 1000, 280, 300, 500, "End"]);