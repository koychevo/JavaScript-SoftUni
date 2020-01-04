function solve(input) {
    let years = Number(input.shift());
    let washerPrice = Number(input.shift());
    let toyPrice = Number(input.shift());
    let moneyFromBirthday = 0;
    let bonusMoney = 10;
    let toysCount = 0;
    for(let i = 1; i <= years; i++) {
        if(i % 2 === 0) {
            moneyFromBirthday += bonusMoney * i / 2 - 1;
        } else {
            toysCount++;
        }
    }
    let totalMoney = moneyFromBirthday + toysCount * toyPrice;
    let difference = totalMoney - washerPrice;
    let result = "";
    if(difference < 0) {
        result = `No! ${Math.abs(difference).toFixed(2)}`;
    } else {
        result = `Yes! ${difference.toFixed(2)}`;
    }
    console.log(result);
}

solve([10, 170.00, 6]);
solve([21, 1570.98, 3]);
