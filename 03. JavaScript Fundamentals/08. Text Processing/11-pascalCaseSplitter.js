function splitWords(text) {
    let capitalIndex = -1;
    let words = [];

    for(let i = 0; i < text.length; i++) {
        let letter = text[i];
        if(letter.toUpperCase() === letter && i !== 0) {
            let word = text.substring(capitalIndex, i);
            words.push(word);
            capitalIndex = i;
        }
    }
    words.push(text.substring(capitalIndex));
    return words.join(', ');
}

console.log(splitWords('SplitMeIfYouCanHaHaYouCantOrYouCan'));
console.log(splitWords('HoldTheDoor'));
console.log(splitWords('ThisIsSoAnnoyingToDo'));

/*
Task: You will receive a single string. 
This string is written in PascalCase format. Your task here is to split this string by every word in it. 
Print them joined by comma and space.
*/
