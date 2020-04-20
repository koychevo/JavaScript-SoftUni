function countWords(text) {
    let wordsObj = {};
    let pattern = /\W+/g;
    let words = text[0].split(pattern).filter(el => el != '');
    for (let word of words) {
        if(wordsObj.hasOwnProperty(word)) {
            wordsObj[word] += 1;
        } else {
            wordsObj[word] = 1;
        }
    }
    return JSON.stringify(wordsObj);
}

console.log(countWords(["Far too slow, you're far too slow."]));
console.log(countWords(['JS devs use Node.js for server-side JS.-- JS for devs']));

/*
Task: You are tasked to count the number of words in a text using an object as an associative array, any combination of letters, digits and _ (underscore) should be counted as a word. The words should be stored in the object as properties - the key being the word and the value being the amount of times the word is contained in the text. 
Input
The input comes as an array of strings containing one entry - the text whose words should be counted. The text may consist of more than one sentence.
Output
The output should be printed on the console - the JSON representation of the object containing the words.
*/
