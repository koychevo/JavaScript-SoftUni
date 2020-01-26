function solve(input) {
    let n = Number(input.shift());
    let result = "";
    for(let i = 1111; i <= 9999; i++) {
        let isSpecial = true;
        let num = i;
        while(num > 0) {
            let digit = num % 10;
            if(n % digit !== 0) {
                isSpecial = false;
                break;
            }
            num = Math.trunc(num / 10);
        }
        if(isSpecial) {
            result += `${i} `;
        }
    }
    console.log(result);
}

solve([3]);
solve([11]);
solve([16]);
