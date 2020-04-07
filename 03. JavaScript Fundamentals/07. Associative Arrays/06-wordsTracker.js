function countWords(input) {
    let wantedWords = input[0].split(' ');
    let words = input.slice(1);
    let wordMap = new Map();

    for (let word of wantedWords) {
        wordMap.set(word, 0);
    }

    for (let word of words) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        }
    }

    let sortedWords = Array.from(wordMap.entries()).sort((a, b) => b[1] - a[1]);

    for (let word of sortedWords) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}

countWords(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);

/*
Task: Write a function that receives an array of words and finds occurrences of given words in that sentence. 
The input will come as array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words you will be looking for. 
Print for each word how many times it occurs. The words should be sorted by count in descending.
*/
