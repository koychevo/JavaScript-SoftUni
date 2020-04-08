function revealWord(words, text) {
    words = words.split(', ');
    let startIndex = text.indexOf('*');
    while (startIndex > - 1) {
        let censoredWord = '*';
        let j = startIndex + 1;
        while (text[j] === '*') {
            censoredWord += '*';
            j++;
        }

        let word = words.filter(el => el.length === censoredWord.length)[0];
        text = text.replace(censoredWord, word);
        startIndex = text.indexOf('*', j);
    }
    return text;
}

console.log(revealWord('great', 'softuni is ***** place for learning new programming languages'));
console.log(revealWord('great, learning', 'softuni is ***** place for ******** new programming languages'));

/*
Task: Write a function, which receives two parameters.
The first parameter will be a string with some words separated by ', '.
The second parameter will be a string which contains templates containing '*'.
Find the word with the exact same length as the template and replace it.
*/
