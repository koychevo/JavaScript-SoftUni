function printOddOccurrences(str) {
    let words = str.split(' ').map(el => el.toLowerCase());
    let wordsMap = new Map();

    for(let word of words) {
        let count = 1;
        if(wordsMap.has(word)) {
            count += wordsMap.get(word);
        }
        wordsMap.set(word, count);
    }
    
    let filteredWords = Array.from(wordsMap.keys()).filter(el => wordsMap.get(el) % 2 !== 0);
    return filteredWords.join(' ');
}

console.log(printOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));

/* 
Task: Write a function that extracts all the elements of a sentence odd number of times (case-insensitive)
The input comes as a single string. The words will be separated by a single space.
*/
