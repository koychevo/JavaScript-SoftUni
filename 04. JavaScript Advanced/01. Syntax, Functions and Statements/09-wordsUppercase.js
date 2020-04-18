function extractWords(input) {
    let words = [];
    let pattern = /[A-Za-z\-]+/g;
    while ((word = pattern.exec(input)) !== null) {
        words.push(word[0].toUpperCase());
    }
    return words.join(', ');
}

console.log(extractWords('Hi, how are you?'));
console.log(extractWords('Functions in JS can be nested, i.e. hold other functions'));

/*
Task: Write a program that extracts all words from a passed in string and converts them to upper case. The extracted words in upper case must be printed on a single line separated by ", ".
The input comes as a single string argument - the text to extract and convert words from.
The output should be a single line containing the converted string.
*/
