function solve([arg1, arg2, arg3, arg4]) {
    const rate = 1.94;
    let vegetablePrice = parseFloat(arg1);
    let fruitPrice = parseFloat(arg2);
    let vegetableWeight = parseInt(arg3);
    let fruitWeight = parseInt(arg4);
    let earnings = (vegetablePrice * vegetableWeight + fruitPrice * fruitWeight) / rate;
    console.log(earnings);
}

solve([0.194, 19.4, 10, 10]);
solve([1.5, 2.5, 10, 10]);
