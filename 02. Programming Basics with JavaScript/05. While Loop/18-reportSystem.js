function solve(input) {
    let moneyNeeded = Number(input.shift());
    let transaction = 0;
    let cash = 0;
    let cashCounter = 0;
    let card = 0;
    let cardCounter = 0;
    while(moneyNeeded > 0) {
        let command = input.shift();
        if(command === "End") {
            break;
        }
        transaction++;
        command = Number(command);
        
        if((transaction % 2 !== 0)) {
            if(command > 100) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                cashCounter++;
                cash += command;
                moneyNeeded -= command;
            }
        } else {
            if(command < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                cardCounter++;
                card += command;
                moneyNeeded -= command;
            }
        }
    }
    if(moneyNeeded > 0) {
        console.log("Failed to collect required money for charity.");
    } else {
        console.log(`Average CS: ${(cash / cashCounter).toFixed(2)}`);
        console.log(`Average CC: ${(card / cardCounter).toFixed(2)}`);
    }
}

solve([500, 120, 8, 63, 256, 78, 317]);
solve([600, 86, 150, 98, 227, "End"]);
