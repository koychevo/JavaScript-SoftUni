function solve(firstStr, char, secondStr) {
    let result = 'Matched';
    let resultStr = '';
    for(let i = 0; i < firstStr.length; i++) {
        resultStr += (firstStr[i] === '_') ? char : firstStr[i];
    }
    if(resultStr !== secondStr) {
        result = 'Not Matched';
    }
    console.log(result);
}

solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');

/*
Task: You will receive 3 parameters (string, char, string).
First string will be a word with a missing char replaced with a underscore '_'
You have to replace the character with the missing part (underscore) from the first string and compare the result with the second string.
If they are equals you should print "Matched", otherwise print "Not Matched".
*/