function reverseString(str) {
    let result = "";
    for(let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    console.log(result);
}

reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");

/*
Task: Write a program which reverses a string and print it on the console.
*/
