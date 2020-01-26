function solve(input) {
    let firstLimit = Number(input.shift());
    let secondLimit = Number(input.shift());
    let thirdLimit = Number(input.shift());
    for (let firstD = 2; firstD <= firstLimit; firstD += 2) {
        for (let secondD = 2; secondD <= secondLimit; secondD++) {
            let isNonPrime = false;
            for(let i = 2; i <= Math.sqrt(secondD); i++) {
                if(secondD % i === 0) {
                    isNonPrime = true;
                    i = secondD;
                }
            }
            if(isNonPrime) {
                continue;
            }
            for (let thirdD = 2; thirdD <= thirdLimit; thirdD += 2) {
                console.log(`${firstD} ${secondD} ${thirdD}`);
            }
        }
    }
}

solve([3, 5, 5]);
//solve([8, 2, 8]);
