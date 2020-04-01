function solve(input) {
    let drinkType = input[0];
    let withSugar = input[1];
    let drinksCount = Number(input[2]);
    let espressoPrice = 0.9;
    let cappuccinoPrice = 1;
    let teaPrice = 0.5;

    if (withSugar === 'Normal') {
        espressoPrice = 1;
        cappuccinoPrice = 1.2;
        teaPrice = 0.6;
    }

    if (withSugar === 'Extra') {
        espressoPrice = 1.2;
        cappuccinoPrice = 1.6;
        teaPrice = 0.7;
    }

    let price = espressoPrice;

    if(drinkType === 'Cappuccino') {
        price = cappuccinoPrice;
    }

    if(drinkType === 'Tea') {
        price = teaPrice;
    }

    let expenses = drinksCount * price;

    if(withSugar === 'Without') {
        expenses *= 0.65;
    }

    if(drinkType === 'Espresso' && drinksCount > 5) {
        expenses *= 0.75;
    }

    if(expenses > 15) {
        expenses *= 0.8
    }

    return `You bought ${drinksCount} cups of ${drinkType} for ${expenses.toFixed(2)} lv.`;
}

console.log(solve(['Espresso', 'Without', 10]));
console.log(solve(['Cappuccino', 'Normal', 13]));
console.log(solve(['Tea', 'Extra', 3]));
