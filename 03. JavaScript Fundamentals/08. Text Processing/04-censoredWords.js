function censoreText(text, word) {
        let censoredWord = '*'.repeat(word.length);
        while(text.indexOf(word) > -1) {
            text = text.replace(word, censoredWord);
        }
        return text;
}

console.log(censoreText("A small sentence with some words", "small"));

/*
Task: Write a function that receives a text as a first parameter  and a single word as a second. Find all occurrences of that word in the text and replace them with the corresponding count of '*'.
*/
