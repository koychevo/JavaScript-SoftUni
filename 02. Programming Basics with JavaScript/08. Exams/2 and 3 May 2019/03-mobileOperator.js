function solve(input) {
    let years = input.shift();
    let plan = input.shift();
    let withInternet = input.shift();
    let months = Number(input.shift());
    let price = 0;
    let internetPrice = 0;
    switch (plan) {
        case 'Small':
            price = years === 'one' ? 9.98 : 8.58;
            break;
        case 'Middle':
            price = years === 'one' ? 18.99 : 17.09;
            break;
        case 'Large':
            price = years === 'one' ? 25.98 : 23.59;
            break;
        default:
            price = years === 'one' ? 35.99 : 31.79;
            break;
    }
    if(withInternet === 'yes') {
        if(price <= 10) {
            internetPrice = 5.5;
        } else if(price <= 30) {
            internetPrice = 4.35;
        } else {
            internetPrice = 3.85;
        }
    }
    let costs = months * (price + internetPrice);
    if (years === 'two') {
        costs *= (100 - 3.75) / 100;
    }
    console.log(`${costs.toFixed(2)} lv.`);
}

solve(['one', 'Small', 'yes', 10]);
solve(['two', 'Large', 'no', 10]);
solve(['two', 'ExtraLarge', 'yes', 20]);
solve(['two', 'Small', 'yes', 20]);
