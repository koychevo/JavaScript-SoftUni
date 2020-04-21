function processor() {
    let str = '';

    function append(text) {
        str += text;
    }

    function removeStart(n) {
        str = str.substring(n);
    }

    function removeEnd(n) {
        str = str.substring(0, str.length - n);
    }

    function print() {
        console.log(str);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}

/*
Task: Write a program that keeps a string inside its context and can execute different commands that modify or print the string on the console.
append(string) - append the given string at the end of the internal string
removeStart(n) - remove the first n characters from the string, n is an integer
removeEnd(n) - remove the last n characters from the string, n is an integer
print - print the stored string on the console
Input
Check the examples below to see how your code will be executed
Output
Whenever you receive the command print, the output should be the printed on the console.
*/
