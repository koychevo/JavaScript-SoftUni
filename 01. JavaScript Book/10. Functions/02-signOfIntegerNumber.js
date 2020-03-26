function printSign(num) {
    let result = `The number ${num} is `;
    if(num === 0) {
        result += `zero.`;
    } else if(num < 0) {
        result += 'negative.';
    } else {
        result += 'positive.';
    }
    console.log(result);
}

printSign(2);
printSign(-5);
printSign(0);