function findOccurrences(text, word) {
    let count = 0;
    let wordsOfText = text.split(' ');
    for(let wordOfText of wordsOfText) {
        if(wordOfText === word) {
            count++;
        }
    }
    return count;
}

console.log(findOccurrences("This is a word and it also is a sentence", "is"));

/*
Task: Write a function that receives a text and a string that you need to search. Print all the occurrences of that word in the string.
*/
