function solve(input) {
    const rate = 1.85;
    let tables = parseInt(input.shift());
    let tableLength = parseFloat(input.shift());
    let tableWidth = parseFloat(input.shift());
    let coverArea = (tableLength + 0.6) * (tableWidth + 0.6);
    let squareArea = tableLength * tableLength / 4;
    let priceInUsd = tables * (coverArea * 7 + squareArea * 9);
    let priceInBgn = priceInUsd * rate;
    console.log(`${priceInUsd.toFixed(2)} USD`);
    console.log(`${priceInBgn.toFixed(2)} BGN`);
}

solve([5, 1.00, 0.50]);
solve([10, 1.20, 0.65]);
