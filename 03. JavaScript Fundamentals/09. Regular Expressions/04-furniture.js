function printProducts(input) {
    let inputProducts = input.slice();
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+[\.\d]+)!(?<qty>\d+)/g;
    let products = [];
    products[0] = 'Bought furniture:';
    let total = 0;
    let line = inputProducts.shift();
    while(line !== 'Purchase') {
        let product = pattern.exec(line);
        while(product !== null) {
            products.push(product.groups['name']);
            total += Number(product.groups['price']) * Number(product.groups['qty']);
            product = pattern.exec(line);
        }
        line = inputProducts.shift();
    }
    products.push(`Total money spend: ${total.toFixed(2)}`);
    return products.join('\n');
}


console.log(printProducts(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']));

/*
Task: Write a function to calculate the total cost of different types of furniture. You will be given some lines of input until you receive the line "Purchase". For the line to be valid it should be in the following format:
">>{furniture name}<<{price}!{quantity}"
The price can be floating point number or whole number. Store the names of the furniture and the total price. At the end print the each bought furniture on separate line in the format:
"Bought furniture:
{1st name}
{2nd name}
…"
And on the last line print the following: "Total money spend: {spend money}" formatted to the second decimal point.
*/
