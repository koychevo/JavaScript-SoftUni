function fillWords(input) {
    let [text, words] = input;
    let startIndex = text.indexOf('_');
    while(startIndex > - 1) {
        let censoredWord = '_';
        let j = startIndex + 1;
        while(text[j] === '_') {
            censoredWord += '_';
            j++;
        }

        let word = words.filter(el => el.length === censoredWord.length)[0];
        text = text.replace(censoredWord, word);
        startIndex = text.indexOf('_', j);
    }
    return text;
}

console.log(fillWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
));

/*
Task: You will receive an array which holds string and another array. 
The string is a letter from young boy who does not yet know some words and you have to help him. The letter has few holes, these holes are the words unknown to the boy and you must fill them with strings from the array you receive at the second index. 
If a length of the hole is 4 you have to replace it with string with the same length and so on…
*/
