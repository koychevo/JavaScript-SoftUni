function findWord(word, text) {
    let searchWord = word.toLowerCase().trim();
    text = text.toLowerCase();
    let words = text.split(' ');
    for(wordOfText of words) {
        if(wordOfText === searchWord) {
            return word;
        }
    }
        return `${word} not found!`;
}

console.log(findWord('javascript', 'JavaScript is the best programming language'));
console.log(findWord('python', 'JavaScript is the best programming language'));

/*
Task: The input will be given as two separated strings.
Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find match, print the word and stop the program. 
If you don't find the word print "{word} not found!"
*/
