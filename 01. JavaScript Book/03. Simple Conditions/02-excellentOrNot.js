function solve(arg1) {
    let grade = parseFloat(arg1);
    if(grade >= 5.5) {
        console.log("Excellent!");
    } else {
        console.log("Not excellent.");
    }
}

solve(6);
solve(5);
solve(5.5);
solve(5.49);
