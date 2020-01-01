function solve(input) {
    let animal = input.shift().toLowerCase();
    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}

solve(["tortoise"]);
solve(["dog"]);
solve(["elephant"]);
