function solve(input) {
    while (true) {
        let num = parseInt(input.shift());
        if(num % 2 === 0) {
            console.log(`Even number entered: ${num}`);
            break;
        }
        console.log("The number is not even.");
    }
}

solve([2]);
solve([3, 5, 6]);