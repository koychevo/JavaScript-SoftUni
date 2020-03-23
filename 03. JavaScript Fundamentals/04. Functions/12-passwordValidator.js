function checkPassword(password) {
    isValid = true;

    if(!isLengthCorrect(password)) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }

    if(!isOnlyLettersDigits(password)) {
        isValid = false;
        console.log('Password must consist only of letters and digits');
    }

    if(!isMin2Digit(password)) {
        isValid = false;
        console.log('Password must have at least 2 digits');
    }

    if(isValid) {
        console.log('Password is valid');
    }

    function isLengthCorrect(password) {
        return (password.length >= 6 && password.length <= 10) ? true : false;
    }
    
    function isOnlyLettersDigits(password) {
        for(let i = 0; i < password.length; i++) {
            let char = password[i].charCodeAt(0);
            if(char < 48 || (char > 57 && char < 65) || (char > 90 && char < 97) || char > 122) {
                return false;
            }
        }
        return true;
    }

    function isMin2Digit(password) {
        let digitCount = 0;
        for(let i = 0; i < password.length; i++) {
            let char = password[i].charCodeAt(0);
            if(char >= 48 && char <= 57) {
                digitCount++
            }
        }
        if(digitCount >= 2) {
            return true;
        } else {
            return false;
        }
    }
}

checkPassword('logIn');
checkPassword('MyPass123');
checkPassword('Pa$s$s');


/*
Task: Write a function that checks if a given password is valid. Password validations are:
•	The length should be 6 - 10 characters (inclusive)
•	It should consists only of letters and digits
•	It should have at least 2 digits 
If a password is valid print "Password is valid".
If it is NOT valid, for every unfulfilled rule print a message:
•	"Password must be between 6 and 10 characters"
•	"Password must consist only of letters and digits"
•	"Password must have at least 2 digits"
*/
