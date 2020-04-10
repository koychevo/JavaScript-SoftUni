function printProducts(input) {
    let products = {};
    for (let line of input) {
        let [product, quantity] = line.split(' : ');
        let firstLetter = product[0];
        if (!products.hasOwnProperty(firstLetter)) {
            products[firstLetter] = [];
        }
        let newProduct = [product, Number(quantity)];
        products[firstLetter].push(newProduct);
    }
    let sortedProducts = Object.entries(products).sort((a, b) => alphabeticSort(a[0], b[0]));
    for (let line of sortedProducts) {
        let [letter, products] = line;
        console.log(letter);
        let sortedListProducts = products.sort((a,b) => alphabeticSort(a[0], b[0]));
        for(let product of sortedListProducts) {
            let [name, quantity] = product;
            console.log(`  ${name}: ${quantity}`);
        }
    }

    function alphabeticSort(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
        return 0;
    }
    
}

printProducts(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);

/*
Task: You have to create a sorted catalogue of store products. You will be given the products’ names and prices. You need to order them by alphabetical order. 
The input comes as array of strings. Each element holds info about a product in the following format:
“{productName} : {productPrice}”
The product’s name will be a string, which will always start with a capital letter, and the price will be a number. You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
As output you must print all the products in a specified format. They must be ordered exactly as specified above. The products must be divided into groups, by the initial of their name. The group’s initial should be printed, and after that the products should be printed with 2 spaces before their names. For more info check the examples.
*/
