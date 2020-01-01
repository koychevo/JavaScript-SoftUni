function solve(input) {
    let num = Number(input.shift());
    let range = (num >= 100 && num <= 200) || num === 0;
    if(!range) {
        console.log("invalid");
    }
}

solve([75]);
solve([150]);
solve([220]);
