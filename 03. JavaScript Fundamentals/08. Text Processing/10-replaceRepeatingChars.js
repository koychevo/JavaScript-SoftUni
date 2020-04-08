function deleteReapingChars(str) {
    let result = '';
    for(let i = 0; i < str.length; i++) {
        let j = i + 1;
        while(str[i] === str[j]) {
            i = j
            j++;
        }
        result += str[i];
    }
    return result;
}

console.log(deleteReapingChars('aaaaabbbbbcdddeeeedssaa'));
console.log(deleteReapingChars('qqqwerqwecccwd'));

/*
Task: Write a function that receives a single string and replaces any sequence of the same letters with a single corresponding letter.
*/
