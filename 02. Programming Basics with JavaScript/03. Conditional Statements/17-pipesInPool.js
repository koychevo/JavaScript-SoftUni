function solve(input) {
    let volume = Number(input.shift());
    let debitFirstPipe = Number(input.shift());
    let debitSecondPipe = Number(input.shift());
    let hours = Number(input.shift());
    let result = ""
    let firstPipe = debitFirstPipe * hours;
    let secondPipe = debitSecondPipe * hours;
    if(firstPipe + secondPipe > volume) {
        result = `For ${hours} hours the pool overflows with ${(firstPipe + secondPipe - volume).toFixed(2)} liters.`;
    } else {
        result = `The pool is ${((firstPipe + secondPipe) / volume * 100).toFixed(2)}% full. Pipe 1: ${(firstPipe / (firstPipe + secondPipe) * 100).toFixed(2)}%. Pipe 2: ${(secondPipe / (firstPipe + secondPipe) * 100).toFixed(2)}%.`;
    }
    console.log(result);
}

solve([1000, 100, 120, 3]);
solve([100, 100, 100, 2.5]);
