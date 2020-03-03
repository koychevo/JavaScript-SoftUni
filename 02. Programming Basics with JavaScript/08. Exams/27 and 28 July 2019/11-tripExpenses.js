function solve(input) {
    let days = Number(input.shift());
    let moneyFromPreviousDay = 0;
    for( let day = 1; day <= days; day++) {
        let dailyLimit = 60 + moneyFromPreviousDay;
        let price = input.shift();
        let isLimitOver = false;
        let products = 0;
        while(price !== "Day over") {
            price = Number(price);
            if(price <= dailyLimit) {
                dailyLimit -= price;
                products++;
            }
            if(dailyLimit === 0) {
                isLimitOver = true;
                break;
            }
            price = input.shift();
        }
        if(isLimitOver) {
            console.log(`Daily limit exceeded! You've bought ${products} products.`);
        } else {
            moneyFromPreviousDay = dailyLimit;
            console.log(`Money left from today: ${moneyFromPreviousDay.toFixed(2)}. You've bought ${products} products.`);
        }
    }
}

solve([3, 20, 40, 40, 15, "Day over", 15, 5, 10, 17, 10, "Day over"]);
solve([2, "Day over", 100, 20]);
solve([2, "Day over", 130, 100, 40, 20]);
