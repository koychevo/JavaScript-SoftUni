function solve(words) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let powerWord = '';
    let word = words.shift();
    while(word !== 'End of words') {
        let sum = 0;
        let len = word.length;
        for(let i = 0; i < len; i++) {
            sum += word[i].charCodeAt(0);
        }
        let firstLetter = word[0].toLowerCase().charCodeAt(0);
        if(firstLetter === 97 || firstLetter === 101 || firstLetter === 105 || firstLetter === 111 || firstLetter === 117 || firstLetter === 121) {
            sum *= len;
        } else {
            sum = Math.floor(sum / len);
        }
        if(sum > maxSum) {
            powerWord = word;
            maxSum = sum;
        }
        word = words.shift();
    } 
    return `The most powerful word is ${powerWord} - ${maxSum}`;
}

console.log(solve(["The", "Most", "Powerful", "Word", "Is", "Experience", "End of words"]));
console.log(solve(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]));
