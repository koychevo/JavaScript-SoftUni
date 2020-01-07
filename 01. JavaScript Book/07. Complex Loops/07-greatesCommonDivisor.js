function solve(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());

    if(a > b) {
        a = a + b;
        b = a - b;
        a = a - b;
    }

    while(b !== 0) {
        let oldB = b;
        b = a % b;
        a = oldB;
    }

    console.log(`GCD = ${a}`);
}

solve([12, 24]);