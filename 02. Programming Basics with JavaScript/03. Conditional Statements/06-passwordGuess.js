function solve(input) {
    const password = "s3cr3t!P@ssw0rd";
    let result = "";
    let pass = input.shift();
    if(pass === password) {
        result = "Welcome";
    } else {
        result = "Wrong password!";
    }
    console.log(result);
}

solve(["qwerty"]);
solve(["s3cr3t!P@ssw0rd"]);
solve(["s3cr3t!p@ss"]);