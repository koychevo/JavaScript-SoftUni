function printSpecialWords(text) {
    let words = text.split(' ');
    for(let word of words) {
        if(word.startsWith('#') && word.length > 1) {
            let isWordValid = true;
            let lowerWord = word.toLowerCase().substring(1);
            for(let ch of lowerWord) {
                let ascii = ch.charCodeAt(0);
                if(!(ascii >= 97 && ascii <= 122)) {
                    isWordValid = false;
                    break;
                }
            }

            if(isWordValid) {
                console.log(word.substring(1));
            }
        }
    }
}

printSpecialWords('Nowadays everyone uses # to tag a #special word in #socialMedia');

/*
Task: The input will be a single string.
Find all special words starting with #. Word is invalid if it has anything other than letters. 
Print the words you found without the tag each on a new line.
*/
