function calculatePrice(input) {
    let chicken = Number(input.shift());
    let fish = Number(input.shift());
    let vegetarian = Number(input.shift());
    const deliveryCosts = 2.50;
    let costs = 10.35 * chicken + 12.40 * fish + 8.15 * vegetarian;
    let totalCosts = 1.2 * costs + deliveryCosts;
    console.log(`Total: ${totalCosts.toFixed(2)}`); 
}

calculatePrice([2, 4, 3]);
calculatePrice([10, 0, 6]);
calculatePrice([1, 1, 1]);

