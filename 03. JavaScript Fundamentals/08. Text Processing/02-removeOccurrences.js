function removeWord(word, text) {
    while(text.indexOf(word) > -1) {
        text = text.replace(word, '');
    }
    return text;
}

console.log(removeWord('ice', 'kicegiciceeb'));

/*
Task: Write a function that receives a text and a word to remove all occurrences of it inside the text.
*/
