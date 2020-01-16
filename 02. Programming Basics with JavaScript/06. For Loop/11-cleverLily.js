function solve(input) {
    let years = Number(input.shift());
    let washingPrice = Number(input.shift());
    let toyPrice = Number(input.shift());
    let moneyFromToys = 0;
    let moneyFromBirthdays = 0;
    let birthdayBonus = 0;
    const brotherMoney = 1;
    for(let i = 1; i <= years; i ++) {
        if(i % 2 === 0) {
            birthdayBonus += 10;
            moneyFromBirthdays += birthdayBonus - brotherMoney;
        } else {
            moneyFromToys += toyPrice;
        }
    }
    let savings = moneyFromToys + moneyFromBirthdays;
    let result = "";
    if(savings < washingPrice) {
        result = `No! ${(washingPrice - savings).toFixed(2)}`;
    } else {
        result = `Yes! ${(savings - washingPrice).toFixed(2)}`;
    }
    console.log(result);
}

solve([10, 170.0, 6]);
solve([21, 1570.98, 3]);
