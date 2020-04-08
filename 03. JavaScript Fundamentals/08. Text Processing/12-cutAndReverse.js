function reverseWords(str) {
    let middle = str.length / 2;
    let firstWord = str.substring(0, middle);
    let secondWord = str.substring(middle);
    let firstReversed = reverseWord(firstWord);
    let secondReversed = reverseWord(secondWord);
    console.log(firstReversed);
    console.log(secondReversed);

    function reverseWord(word) {
        let result = '';
        for(let i = word.length - 1; i >= 0; i--) {
            result += word[i];
        }
        return result;
    }
}

reverseWords('tluciffiDsIsihTgnizamAoSsIsihT');
reverseWords('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

/*
Task: The input will be a single string.
Write a function that cuts the given string into half and reverse the two halves. 
Print each half on a separate line.
*/
