function solve(input) {
    const price = 7.61;
    let area = parseFloat(input.shift());
    let sum = area * price;
    let discount = sum * 0.18;
    let finalPrice = sum - discount;
    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

solve([540]);
solve([135]);
