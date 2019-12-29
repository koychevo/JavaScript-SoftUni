function solve([arg1, arg2]) {
    let firstWord = arg1.toLowerCase();
    let secondWord = arg2.toLowerCase();
    if(firstWord == secondWord) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

solve(["Hello", "Hello"]);
solve(["SoftUni", "softuni"]);
solve(["Soft", "Uni"]);
solve(["beer", "vodka"]);
solve(["HeLlO", "hELLo"]);