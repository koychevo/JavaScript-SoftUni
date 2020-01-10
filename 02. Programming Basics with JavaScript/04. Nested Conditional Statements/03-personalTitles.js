function solve(input) {
    let age = Number(input.shift());
    let gender = input.shift().toLowerCase();
    result = "";
    if(age >= 16) {
        result = (gender === "m") ? "Mr." : "Ms.";
    } else {
        result = (gender === "m") ? "Master" : "Miss";
    }
    console.log(result);
}

solve([12, "f"]);
solve([17, "m"]);
solve([25, "f"]);
solve([13.5, "m"]);
