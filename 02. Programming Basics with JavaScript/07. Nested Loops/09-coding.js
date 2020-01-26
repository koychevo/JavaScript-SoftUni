function solve(input) {
    let num = Number(input.shift());
    while(num > 0) {
        let digit = num % 10;
        num = Math.trunc(num / 10);
        let line = "";
        if(digit === 0) {
            line = "ZERO";
        } else {
            line = String.fromCharCode(digit+33).repeat(digit);
        }
        console.log(line);
    }
}

solve([2049]);
solve([9347439]);
solve([123456789]);
