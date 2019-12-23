function solve(input) {
    const rate = 1.94;
    let vegetablePrice = Number(input.shift());
    let fruitPrice = Number(input.shift());
    let vegetables = Number(input.shift());
    let fruits = Number(input.shift());
    let price = (vegetablePrice * vegetables + fruitPrice * fruits) / rate;
    console.log(price.toFixed(2))
}

solve([0.194, 19.4, 10, 10]);
solve([1.5, 2.5, 10, 10]);
