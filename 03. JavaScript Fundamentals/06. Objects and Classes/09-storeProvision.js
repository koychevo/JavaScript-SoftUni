function showStock(currentStock, ordered) {
    let stock = currentStock.slice();

    for(let i = 0; i < ordered.length - 1; i+=2) {
        let product = ordered[i];
        let index = stock.indexOf(product);
        if(index > -1) {
            stock[index+1] = Number(stock[index+1]) + Number(ordered[i+1]);
        } else {
            stock.push(product);
            stock.push(ordered[i+1]);
        }
    }
    let allProducts = makeProductsList(stock);
    
    for(let key in allProducts) {
        console.log(`${key} -> ${allProducts[key]}`);
    }
    
    function makeProductsList(products) {
        let productsList = {};
        for(let i = 0; i < products.length - 1; i+=2) {
            let name = products[i];
            let quatity = Number(products[i+1]);
            productsList[name] = quatity;
        }
        return productsList;
    }
}

showStock(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

/*
Task: You will receive two arrays. The first array represents a current stock of the local store. The second array will contain products which the store has ordered for delivery.
The following information applies to both arrays:
Every even index will hold the name of the product and on every odd index will hold the quantity of that product. The second array could contain products that are already in the local store. If that happens increase the quantity for the given product .You should store them into an object, and print them in the following format: (product -> quantity)
All of the arrays values will be strings.
*/
