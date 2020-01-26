function solve(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let maxPass = Number(input.shift());
    let passCounter = 0;
    let passwords = "";
    let l1 = 35;
    let l2 = 64;
    for (let x = 1; x <= a; x++) {
        for (let y = 1; y <= b; y++) {
            if (passCounter >= maxPass) {
                x = a + 1;
                break;
            }
            l1 = (l1 > 55) ? 35 : l1;
            l2 = (l2 > 96) ? 64 : l2;
            passwords += `${String.fromCharCode(l1)}${String.fromCharCode(l2)}${x}${y}${String.fromCharCode(l2)}${String.fromCharCode(l1)}|`
            passCounter++;
            l1++;
            l2++;
        }
    }
    console.log(passwords);
}

solve([2, 3, 10]);
solve([20, 50, 10]);
