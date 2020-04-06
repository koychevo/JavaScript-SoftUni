function solve(products) {
    products.sort();
    for(let i = 0; i < products.length; i++) {
        console.log(`${i+1}.${products[i]}`);
    }
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);

/*
Task: You will receive an array of products. Print a numbered array of all the products ordered by name.
*/
