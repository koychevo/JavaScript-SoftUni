function solve(input) {
    let qty = Number(input.shift());
    let inputDimension = input.shift().toLowerCase();
    let outputDimension = input.shift().toLowerCase();
    
    if(inputDimension === "mm") {
        qty = qty / 1000;
    }
    if(inputDimension === "cm") {
        qty = qty / 100;
    }
    if(outputDimension === "mm") {
        qty = qty * 1000;
    } 
    if(outputDimension === "cm") {
        qty = qty * 100;
    } 
    console.log(qty.toFixed(3));
}

solve([12, "mm", "m"]);
solve([150, "m", "cm"]);
solve([45, "cm", "mm"]);
