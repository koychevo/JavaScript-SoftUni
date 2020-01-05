function solve(input) {
    let grade = Number(input.shift());
    if(grade >= 5.50) {
        console.log("Excellent!");
    }
}

solve([5.49]);
solve([5.50]);
solve([4]);
solve([6]);