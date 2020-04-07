function printStorage(input) {
    let storage = new Map();
    for(let line of input) {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);
        if(storage.has(item)) {
            quantity += storage.get(item);
        }
        storage.set(item, quantity);
    }

    let items = Array.from(storage.entries());
    
    for(let item of items) {
        let [product, quantity] = item;
        console.log(`${product} -> ${quantity}`);
    }
}

printStorage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);

/*
Task: Write a function that takes a certain number of items and their quantity. If the same item appears more than once, add the new amount to the existing one. At the end print all the items and their amount without sorting them. The input comes as array of strings. Try using a Map().
*/
