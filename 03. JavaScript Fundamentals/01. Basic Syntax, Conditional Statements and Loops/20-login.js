function login(input) {
    let username = input.shift();
    let reversedUsername = "";
    for(let i = username.length - 1; i >= 0; i--) {
        reversedUsername += username[i];
    }
    let loginTry = 1;
    while(loginTry < 5) {
        let password = input.shift();
        if(password === reversedUsername) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            let result = loginTry === 4 ? `User ${username} blocked!` : "Incorrect password. Try again.";
            console.log(result);
        }
        loginTry++;
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);

/*
Task: You will be given a string representing a username. The password will be that username reversed. Until you receive the correct password print on the console "Incorrect password. Try again.". When you receive the correct password print "User {username} logged in." However on the fourth try if the password is still not correct print "User {username} blocked!" and end the program. The input comes as an array of strings.
*/
