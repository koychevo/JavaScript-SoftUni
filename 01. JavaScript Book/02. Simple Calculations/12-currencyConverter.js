function solve([arg1, arg2, arg3]) {
    let qty = parseFloat(arg1);
    let inputCurrency = arg2;
    let outputCurrency = arg3;
    let inputBGN;
    if(inputCurrency == "BGN") {
        inputBGN = qty;
    }
    if(inputCurrency == "USD") {
        inputBGN = qty * 1.79549;
    }
    if(inputCurrency == "EUR") {
        inputBGN = qty * 1.95583;
    }
    if(inputCurrency == "GBP") {
        inputBGN = qty * 2.53405;
    }
    if(outputCurrency == "BGN") {
        console.log(`${inputBGN.toFixed(2)} BGN`);
    }
    if(outputCurrency == "USD") {
        console.log(`${(inputBGN / 1.79549).toFixed(2)} USD`);
    }
    if(outputCurrency == "EUR") {
        console.log(`${(inputBGN / 1.95583).toFixed(2)} EUR`);
    }
    if(outputCurrency == "GBP") {
        console.log(`${(inputBGN / 2.53405).toFixed(2)} GBP`);
    }
}

solve([20, "USD", "BGN"]);
solve([100, "BGN", "EUR"]);
solve([12.35, "EUR", "GBP"]);
solve([150.35, "USD", "EUR"]);
