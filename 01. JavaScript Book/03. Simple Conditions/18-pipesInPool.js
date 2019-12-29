function solve([arg1, arg2, arg3, arg4]) {
    let v = parseInt(arg1);
    let p1 = parseInt(arg2);
    let p2 = parseInt(arg3);
    let h = parseFloat(arg4);
    let firstPipe = h * p1;
    let secondPipe = h * p2;
    let waterFromPipes = firstPipe + secondPipe;
    if(waterFromPipes > v) {
        console.log(`For ${h} hours the pool overflows with ${waterFromPipes - v} liters.`);
    } else {
        let fullPercent = Math.trunc(waterFromPipes / v * 100);
        let firstPipePercent = Math.trunc(firstPipe / waterFromPipes * 100);
        let secondPipePercent = Math.trunc(secondPipe / waterFromPipes * 100);
        console.log(`The pool is ${fullPercent}% full. Pipe 1: ${firstPipePercent}%. Pipe 2: ${secondPipePercent}%.`);
    }
}

solve([1000, 100, 120, 3]);
solve([100, 100, 100, 2.5]);
