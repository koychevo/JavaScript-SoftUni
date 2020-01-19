function solve(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let isFound = false;
    let combination = 0;
    let firstNum = secondNum = 0;
    let magicNum = Number(input.shift());
    for(let i = num1; i <= num2; i++) {
        for(let j = num1; j <= num2; j++) {
            combination++;
            if( i + j === magicNum) {
                isFound = true;
                firstNum = i;
                secondNum = j;
                i = num2 + 1;
                break;
            }
        }
    }
    if(isFound) {
        console.log(`Combination N:${combination} (${firstNum} + ${secondNum} = ${magicNum})`);
    } else {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}

solve([1, 10, 5]);
solve([88, 888, 1000]);
solve([23, 24, 20]);
solve([88, 888, 2000]);
