function solve(pass) {
    let password = "s3cr3t!P@ssw0rd";
    if(pass == password) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!")
    }
}

solve("qwerty");
solve("s3cr3t!P@ssw0rd");
solve("s3cr3t!p@ss");
