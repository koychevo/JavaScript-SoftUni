function solve([arg1, arg2, arg3]) {
    let bitcoins = parseInt(arg1);
    let yuans = parseFloat(arg2);
    let commission = parseFloat(arg3) / 100;
    let euro = (bitcoins * 1168 + yuans * 0.15 * 1.76) / 1.95;
    let euroTotal = euro - commission * euro;
    console.log(euroTotal.toFixed(2));
}

solve([1, 5, 5]);
solve([20, 5678, 2.4]);
solve([7, 50200.12, 3]);
