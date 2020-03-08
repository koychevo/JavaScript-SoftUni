function solve(input) {
    let budget = Number(input.shift());
    let products = 0;
    let costs = 0;
    let result = '';
    let productName = input.shift();
    while(productName !== 'Stop') {
        let productPrice = Number(input.shift());
        budget -= productPrice;
        if(budget >= 0) {
            products++;
            costs += (products % 3 !== 0) ? productPrice : productPrice / 2;
            productName = input.shift();
        } else {
            productName = 'Stop';
        }
    }
    if(budget > 0) {
        result = `You bought ${products} products for ${costs.toFixed(2)} leva.`;
    } else {
        result = `You don't have enough money!\nYou need ${(-budget).toFixed(2)} leva!`;
    }
    console.log(result);
}

solve([153.20, 'Backpack', 25.20, 'Shoes', 54, 'Sunglasses', 30, 'Stop']);
solve([54, 'Thermal underwear', 24, 'Sunscreen', 45]);
