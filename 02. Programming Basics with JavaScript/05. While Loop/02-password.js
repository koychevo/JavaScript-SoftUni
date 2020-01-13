function solve(input) {
    let username = input.shift();
    let password = input.shift();
    let inputPassword = input.shift();
    while(inputPassword !== password) {
        inputPassword = input.shift();
    }
    console.log(`Welcome ${username}!`);
}

solve(["Pesho", 1234, "pass", 1324, 1234]);
solve(["Gosho", "secret", "secret"]);