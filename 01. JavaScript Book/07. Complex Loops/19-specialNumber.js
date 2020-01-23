function solve(input) {
    let n = Number(input.shift());
    let result = "";
    for(let i = 1111; i <= 9999; i++) {
        let num = i;
        let isMagic = true;
        for(let j = 0; j < 4; j++) {
            let digit = num % 10;
            if(n % digit !== 0) {
                isMagic = false;
                break;
            }
            num = Math.trunc(num / 10);
        }
        if(isMagic) {
            result += `${i} `;
        }
    }
    console.log(result);
}

solve([3]);
solve([11]);
solve([16]);
