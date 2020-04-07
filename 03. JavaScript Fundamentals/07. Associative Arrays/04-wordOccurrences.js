function countWords(words) {
    let wordsMap = new Map();

    for(let word of words) {
        let count = 1;
        if(wordsMap.has(word)) {
            count += wordsMap.get(word);
        }
        wordsMap.set(word, count);
    }
    
    let sortedWords = Array.from(wordsMap.entries()).sort((a, b) => b[1] - a[1]);
    
    for (let word of sortedWords) {
        console.log(`${word[0]} -> ${word[1]} times`);
    }
}

countWords(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);

/*
Task: Write a function that counts the times each word occurs in a text. Print the words sorted by count in descending order. The input comes as an array of strings.
*/
