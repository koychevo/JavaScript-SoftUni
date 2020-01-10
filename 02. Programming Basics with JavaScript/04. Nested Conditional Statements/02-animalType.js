function solve(input) {
    let animal = input.shift().toLowerCase();
    result = "";
    switch (animal) {
        case "dog":
            result = "mammal";
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            result = "reptile";
            break;
        default:
            result = "unknown";
            break;
    }
    console.log(result);
}

solve(["dog"]);
solve(["snake"]);
solve(["cat"]);
